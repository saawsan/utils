# Utils
List of util functions to reuse

##verticalAlignElements
Vertical align an absolute positionned element inside an relative positionned element by adding a negative margin-top that equals half the element itself.

##bypassFocus
Set focus to the targeted element when user clicks on a bypass link.
tabindex=-1 allows any dom element to be focused via javascript
(Accessibility)

##handleHash
If current hash matches an #id in the page, scroll to display it

##getTagObject
Convert a preformatted string to object 
Example : sData = "type=clic;cat=action;name=Activite::Filtres::Prix::5_10euros"

##handleSticky
Handle sticky nav: Add class .is-sticky when scrollTop is higher than 300px.