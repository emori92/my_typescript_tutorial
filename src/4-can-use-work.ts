// const p = console.log
const p = console.log;

// function: 引数の省略
const printTest1 = (s: string, n?: number): void => {
  p(`string: ${s}, number: ${n}`);
}
const printTest2 = (s: string, n?: number): void => {
  p(`string: ${s}, number: ${n || 'number is undefined.'}`);
}
// run
printTest1('test');  // string: test, number: undefined
printTest2('test');  // string: test, number: number is undefined.

// tuple: 要素に異なるtypeを入れられる
const movie: [string, number] = ['Evangelion', 1989];
// 1つ以上のstring要素を含めるtuple
const tupleTest: [...string[]] = [];

// array
const strArray: string[] = ['a', 'b', 'c'];
strArray;
// 分割代入: 配列をそれぞれ定義
const [str1, str2, str3] = strArray;
str1;
// 残余構文: 2番目以降の配列を作成
const [, ...copyArray] = strArray;
copyArray;
// includes: 配列に特定の要素があるか判定
strArray.includes('a');
copyArray.includes('a');

// type
type Foobar = {
  foo: string;
  bar?: string;
};

// object
const testObject: Foobar = {
  foo: 'foo',
  bar: 'bar'
};
// copy
const {...obj1} = testObject;
obj1;
// fooを除外してcopy
const {foo, ...obj2} = testObject;
obj2;
// typeを指定
const textObj1: Foobar = {
  foo: 'foo',
  bar: 'bar'
};
const textObj2: Foobar = {
  foo: 'foo'
};
// pure obj
p(textObj1);
p(textObj2);
// print obj.bar
p(textObj1?.bar);
p(textObj2?.bar);
// barオブジェがある場合、大文字にする
p(textObj1?.bar?.toUpperCase());
p(textObj2?.bar?.toUpperCase());
// keyが可変のobject
const keyTest: { [key: string]: string } = {
  'key1': 'value1',
  'key2': 'value2',
  'key3': 'value3'
};
// check key
for (const [key, value] of Object.entries(keyTest)) {
  p(`key: ${key}, value: ${value}`);
}

// 定数を不可変にする
const numList1: readonly number[] = [1, 2, 3];
const numList2 = [1, 2, 3] as const;
numList1;
numList2;

// declare
// $が未定義なのでエラー
// $('.awesome').show();
// declareでグローバル変数の存在を伝える
// declare var $: any;

// 非同期処理
const char1: string = '非同期処理を開始';
const char2: string = '非同期処理を実行';
const char3: string = '非同期処理を経過\n';
// 非同期処理を開始
p(`\n1. ${char1}`);
// setTimeout: 1秒後に実行
setTimeout(() => {
  // 非同期処理を実行
  p(`1. ${char2}`);
}, 1000);
// 非同期処理を経過
p(`1. ${char3}`);

// Promise: 旧
const url: string = 'https://example.com';
// function
const returnResponse = async (url: string, num=2): Promise<string> => {
  p(`\n${num}. ${char1}`);
  return  `return "response of ${url}"`;
};
const returnJson = async (response: string): Promise<string> => {
  return `{"jsonTest": ${response}}`;
};
// run function
returnResponse(url).then((resp: string): string => {
  // 非同期処理を実行
  p(`2. ${char2}\n`);
  // return
  return `{response: ${resp}}`
});
// 非同期処理を経過
p(`2. ${char3}`);

// Promise: 新
const newResponse = async (url: string) => {
  const num: number = 3;
  // 非同期処理を実行
  const resp: string = await returnResponse(url, num);
  const json: string = await returnJson(resp);
  // log
  p(`${num}. ${char2}`);
  // return
  return json;
};

const jsonTest = newResponse(url);
// log
p(jsonTest);
// 非同期処理を経過
p(`3. ${char3}: ${jsonTest}`);

// 1秒後のlog
setTimeout(() => {
  p(jsonTest);
}, 1010);

// DEBUG: console.log({ variable }); => 変数名と値が出力される
console.log({ url });

// console.table/dir
console.table({ url });
console.dir({ url });

// Generics: 何らかの型を受け取る
const setArray = <T>(arg: T, num: number): Array<T> => {
  // create return obj
  const result: Array<T> = [];
  // add obj
  for (let i = 0; i < num; i++) {2
    result.push(arg);
  }
  // return
  return result;
};
// run
const numArray = setArray(44, 10);
p(numArray);

// ジェネリクスの型を推定
const getNapier = <N extends Math>(arg: N): number => {
  return arg.E;
}
// run
const napier = getNapier(Math);
p({ napier });
