Chrome Diagrammer
---

Ever want to have your readmes be a little "spicier"? This will look for js graph code blocks and put them on the page.

Current libraries that are supported
+ [flowchart.js](https://adrai.github.io/flowchart.js/)
+ [mermaid.js](https://knsv.github.io/mermaid/)

Note: I'm not a JS regular, so there are likely some "best practices" that can be done here. Please fork and submit a PR.

started with the awesome extensionizr.com. Thanks for taking the pain out of boilerplate.

download at -- https://chrome.google.com/webstore/detail/chrome-diagrammer/bkpbgjmkomfoakfklcjeoegkklgjnnpk

Usage
----

type a code block with the charting library you want to use
```
```flowchart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
``````


```
```mermaid
sequenceDiagram
A->> B: Query
B->> C: Forward query
Note right of C: Thinking...
C->> B: Response
B->> A: Forward response
``````
