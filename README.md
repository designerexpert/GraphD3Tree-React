# D3 Charts in React

### Approach Using D3 For Rendering instead of React JS

1. Pass a Dom `Ref` from React to D3
2. Prepare Data in D3 (Massage)
3. D3 Will be in charge of Rendering that Node `Ref` and it's children...
4. React LifeCycle will manage Component Changes.
5. Basic D3 Pattern to manage data change...


### Approach Using React for Rendering instead of D3
1. D3 Prepares Data
2. React Does Rendering
3. React Manages all Changes to Dom and Re-Rendering...

### Pseudo Steps
Create Path Elements in SVG
Append them to a Child Element (Ref)
Add Attributes and Styles to Each

Create Many Text Elements inside SVG using some data
Add Attributes to the text...
