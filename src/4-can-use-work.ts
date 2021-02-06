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
$('.awesome').show();
// declareでグローバル変数の存在を伝える
declare var $: any;