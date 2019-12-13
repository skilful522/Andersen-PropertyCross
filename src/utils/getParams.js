import { values, mapObjIndexed } from 'ramda';

const getParams = (obj) => `?${values(mapObjIndexed((key, value) => `${value}=${key}&`, obj)).join('')}`;

export default getParams;
