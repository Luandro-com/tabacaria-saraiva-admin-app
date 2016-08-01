import { eventChannel } from 'redux-saga';
import { put, fork, call, take } from 'redux-saga/effects';
import { firebaseDb } from 'utils/firebase';

// NOTE: Need buffer? If the handler is called before waiting
//       an event by 'take' effect, it will miss somewhat events.
function newOps(name = 'data') {
  const o = {};
  const ch = eventChannel(emit => {
    o.handler = obj => {
      emit({ [name]: obj });
    };
    return () => {};
  });
  ch.handler = o.handler;
  return ch;
}

function newKey(path) {
  return firebaseDb.ref().child(path).push().key;
}

// TODO: Handle errors
export function* get(path, key) {
  // const ops = newOps('error');
  const ref = firebaseDb.ref(`${path}/${key}`);
  const data = yield call([ref, ref.once], 'value');
  return data.val();
}

export function* getAll(path) {
  const ref = firebaseDb.ref(path);
  const data = yield call([ref, ref.once], 'value');
  return {
    success: true,
    message: `got all data from ${path}`,
    data: data.val(),
  };
}

export function* create(path, data) {
  const key = yield call(newKey, path);
  const payload = yield call(() => data, key);
  const ops = newOps('error');
  const ref = firebaseDb.ref();
  const [_, { error }] = yield [
    call([ref, ref.update], payload, ops.handler),
    take(ops),
  ];
  return error;
}

export function* push(path, data) {
  const ref = firebaseDb.ref(path);
  const newItem = ref.push();
  newItem.set(data);
  return {
    success: true,
    message: `pushed new ${newItem.toString()}`,
  };
}

export function* deleteItem(path, key) {
  const ref = firebaseDb.ref(`${path}/${key}`);
  ref.remove();
  return {
    success: true,
    message: `removed ${path}/${key}`,
  };
}

export function* update(path, key, payload) {
  if (typeof payload === 'function') {
    payload = yield call(payload);
  }
  const ops = newOps('error');
  const ref = firebaseDb.ref(`${path}/${key}`);
  const [_, { error }] = yield [
    call([ref, ref.update], payload, ops.handler),
    take(ops),
  ];
  return error;
}

function* runSync(ref, eventType, creator) {
  const ops = newOps();
  yield call([ref, ref.on], eventType, ops.handler);

  while (true) {
    const { data } = yield take(ops);
    yield put(creator({ data }));
  }
}

const EVENT_TYPES = ['child_added', 'child_removed'];
export function* sync(path, mapEventToAction = {}) {
  const ref = firebaseDb.ref(path).limitToLast(20);
  for (let type of EVENT_TYPES) {
    const action = mapEventToAction[type];
    if (typeof action === 'function') {
      yield fork(runSync, ref, type, action);
    }
  }
}
