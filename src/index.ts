import client from './client';

export default client;

const {
  auth,
  // String
  append,
  decr,
  decrby,
  get,
  getrange,
  getset,
  incr,
  incrby,
  incrbyfloat,
  mget,
  mset,
  msetnx,
  psetex,
  set,
  setex,
  setnx,
  setrange,
  strlen,
  // Connection
  echo,
  ping,
  //
  bitcount,
  bitop,
  bitpos,
  dbsize,
  del,
  exists,
  expire,
  flushall,
  flushdb,
  keys,
  pttl,
  ttl,
} = client();

export {
  auth,
  // String
  append,
  decr,
  decrby,
  get,
  getrange,
  getset,
  incr,
  incrby,
  incrbyfloat,
  mget,
  mset,
  msetnx,
  psetex,
  set,
  setex,
  setnx,
  setrange,
  strlen,
  // Connection
  echo,
  ping,
  //
  bitcount,
  bitop,
  bitpos,
  dbsize,
  del,
  exists,
  expire,
  flushall,
  flushdb,
  keys,
  pttl,
  ttl,
};
