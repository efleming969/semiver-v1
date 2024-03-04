export function foo() {
  return "Foo"
}

export type Greeting = {
  text: string
}

export function bar(): Greeting {
  // comment 4
  return { text: "Bar" }
}

export function foobar() {
  return "foobar"
}
