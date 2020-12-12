# .gitignore 파일

출처 : 러닝 자바스크립트(ES6으로 제대로 입문하는 모던 자바스크립트 웹개발

깃에서 추적할 필요가 없는 디렉토리나 파일(임시파일), 용량이 크고 깃에서 pull한 후 사후 다운로드하면 되는 디렉토리(node_modules) 등이 있다. 

이러한 파일을 깃에서 repos로 옮기지 않도록 선언한다. 

/.gitignore

```jsx
npm-debug.log* 
*.log
node_modules
.DS_Store
*.tmp
*~
*.bak
```

작성한 .gitignore 파일을 repos로 add→commit→push한다.

```jsx
$ git add .gitignore 

$ git commit -m ".gitignore 파일 작성"

$ git push origin master
```