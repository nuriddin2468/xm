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
3 - Storage. For now, I am saving <b>Favorite Photo</b> in Subject. Unfortunately, opensource api has no such functionality.<br/>
One of the best solutions to it is to use localStorage, or sessionStorage. But there were written nothing about it in the task.<br/>
4 - Need to add Not Found Page.
5 - Change UI Interface.
