# Why any is a “Type Safety Hole” and Why unknown is the Safer Choice in TypeScript?

TypeScript is made for javascript to make strong and safe. The main purpose is that error can check before code run and developer can catch this. So that typescript use static type checking.

There have a typescript weekness with type safty purpose like **any** and It's a big example of that.

On the other side **unkown** is same flexible but a quite safe than any. So that modern typescript development use unknown for best practice.

# Why any Dangerous

    -can called any method.
    -can assign any value.
    -fail to catch error when wrong operation.

# Why unknown Safer

    -reduce unsafe operation.
    -reduce runtime error.
    -code can be predic.
    -stay type safe.

# Type Narrowing

Type narrowing is process that a broad type can be convert into specific type.

Type narrowing helps by:

    -Typescript can detect exact type.
    -Allow safe operation.
    -block Invalid operation.
