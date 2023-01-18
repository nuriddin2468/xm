# Photo-Stream
Project is about streaming unlimited images.
## What was done
1 - Infinitive scroll as a one component <br/>
2 - Favorites - it is possible to add <b>Photo</b> to favorites, and also remove it too <br/>
3 - Lazy loaded images
4 - Covered with Unit Tests


## What can be improved
1 - Lazy loaded images - For now, i am using here loading=lazy tag. But this solution works only on modern browsers. It would be better if i add another solutions here.<br>
Solution is to add API Intersection Observer to detect when I should load image.<br/>
2 - Improve Performance to infinitive scroll. It would be better if i add virtual scroll here too. In order to render only that parts what i need.<br/>
3 - Need to add Not Found Page.
4 - Change UI Interface.
5 - Try to not use <b>infinite scroll</b> as a component. Needed to implement directive. (in order to attach to every div)
