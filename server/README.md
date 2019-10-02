# Node microservice boilerplate server

## dependencies
- docker
- node/npm
- yarn

## Build
With the aforementioned dependencies installed on your system run

```docker-compose up --build```

## Linters and code style helpers
We use eslint, prettier, and typescript to help lint, enforce code style, and strongly type javascript.

Googling around a bit should be enough to get these different tools set up in your IDE of choice.

## Commit style
We enforce a commit style in order to maintain a clean commit history.


The HEADER is a single line of max. 50 characters that contains a succinct description of the change. It contains a type, scope, and a subject
  - The type describes the kind of change that this commit is providing. Allowed types are:
      * feat (feature)
      * fix (bug fix)
      * docs (documentation)
      * style (formatting, missing semicolons, …)
      * refactor
      * test (when adding missing tests)
      * chore (maintain)
  - The scope can be anything specifying the place of  
    the commit change
  - The Subject is a very short description of the change, in  
    the following format:
      * imperative, present tense: “change” not “changed”/“changes”
      * no capitalised first letter
      * no dot (.) at the end
  - The BODY should include the motivation for the change and contrast this with      previous behavior and must be phrased in imperative present tense 
  - The FOOTER should contain any information about Breaking Changes and is also      the place to reference tickets (proj-555)that this commit closes