# Vuepress & 깃허브 페이지[2] - 설치 및 업로드

# Vuepress란?

- 정적 페이지 생성기

    마크다운 파일(.md)파일을 HTML파일로 자동 변환 해주어 웹페지 지 모양으로 만들어준다. 

    동적인 페이지가 아니므로, 특정 폴더와 연동하여 파일들의 목록을 노출시킨다. 파일을 선택하면 해당 페이지가 웹 페이지로 변환되어 있으므로, 웹 페이지를 이동하는 것처럼 된다. 

- vuepress는 뷰, 뷰 라우터, 뷰 웹팩 구조를 따르고 있다. 공식 페이지도 뷰 프레스로 만들어졌다.

[Introduction | VuePress](https://vuepress.vuejs.org/guide/#features)

- Evan You가 직접 소개한 영상

    [https://www.youtube.com/watch?v=lIv1ItUzktc&t=41s](https://www.youtube.com/watch?v=lIv1ItUzktc&t=41s)

# Vuepress 테마

지킬처럼 뷰도 테마들이 있다. 지킬보다 수는 적다. 테마를 사용하지 않더라도 뷰프레스를 처음부터 만들고 커스텀하려 할 때, 코드들을 보면서 도움을 받을 수 있을 것 같다. 

뷰프레스 테마 뿐만 아니라 다양한 플러그인들을 정리한 목록

[vuepressjs/awesome-vuepress](https://github.com/vuepressjs/awesome-vuepress#plugins)

# Vuepress 설치하기

공식 사이트에 나온 매뉴얼을 따라갔다. 

[Getting Started | VuePress](https://vuepress.vuejs.org/guide/getting-started.html#manual-installation)

1. 깃허브 페이지 로컬 리포지토리에서 터미널을 열고 아래의 명령어 입력한다.

> npm init

→ package.json파일이 생성된다. 

> npm install -D vuepress

→ vuepress 가 설치된다.

> mkdir docs && echo '# Hello VuePress' > docs/README.md

→ 아마도 메인 페이지로 컴파일 될 마크다운 파일 작성. docs 폴더 안에 README.md파일 생성된다.

> vi package.json

package.json파일을 열고 아래의 스크립트를 저장하고 나온다. 

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

> npm run docs:build

→ 마크다운 문서를 html로 렌더링한다. 

```jsx
$ wait Rendering static HTML...
$ SUCESS Generated static files in docs/.vuepress/dist.
```

> npm run docs:dev

→ 뷰프레스 프로젝트를 로컬 서버로 돌린다.

[http://localhost:8080/](http://localhost:8080/) 로 이동하면, 마크다운에서 변환된 html문서가 로드된다.

---

# vuepress를 깃허브 페이지로 설정하기

## !!!잘못된 방식!!!

깃허브 페이지 리파지토리에서 settings → options → github pages 에 들어가서 깃허브 페이지의 루트 폴더를 docs로 설정한다. 브랜치는 master:gh-pages를 생성해서 올리는 것 같은데 일단 master로 올렸다. 

![Vuepress%20&%20%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%84%87%E1%85%B3%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%5B2%5D%20-%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%207abb3ed8a74e4a9ab3f0ae1dc9a3a498/_2020-09-28__7.39.52.png](Vuepress%20&%20%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%84%87%E1%85%B3%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%5B2%5D%20-%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%207abb3ed8a74e4a9ab3f0ae1dc9a3a498/_2020-09-28__7.39.52.png)

로컬 리포지토리에서 터미널을 열고 

```jsx
$ git add -A
$ git commit -m "vuepress deploy"
$ git push origin master
```

리포지토리에 docs폴더가 올라가면 깃 페이지 주소로 찾아가서 확인해본다. 

./docs의 [readme.md](http://readme.md) 파일이 나온다. 그런데 vuepress형식이 아니다. 

vuepress에서 빌드한 결과물이 올라간 것이 아니라 마크다운 파일만 인식해서 html로 변환하여 올린 페이지가 로드되었다. 

깨달은 점 : 

**vuepress를 이용해서 웹 사이트를 생성한 후에 빌드 결과물만 올리는 형식이 되어야 하는데, 웹사이트 만드는 뷰프레스 프로젝트 자체를 올려 버리는 잘못을 했다.** 

## !!! 수정한 방식 !!!

github pages설정만 바꾸어 준다.

어차피 docs폴더는 컴포넌트와 테마를 추가하면서 리포지토리에 계속 저장할 것이다. 깃허브 페이지로 만들어 주는 것을 dist폴더로만 한정하면 된다.

애초에 공식 사이트에서도 dist폴더만 깃에 푸시한다. 일단 공식 사이트에 나온대로 docs폴더에 diploy.sh파일을 하나 만들어 준다. 

> vi deploy.sh

(./docs/deploy.sh)

```json
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com-c-dance:c-dance/c-dance.github.io.git master:gh-pages

cd -
```

이렇게 저장하면, 맨 밑 줄의 

**git push -f git@github.com-c-dance:c-dance/c-dance.github.io.git master:gh-pages**

에 의해서 
**docs/.vuepress/dist** 폴더만 **gh-branch** 브랜치로 푸시된다. (pr이 올라간다)

그러면 다시 리포지토리의 settings → options → github pages 으로 가서 깃허브 페이지에 로드 되는 것은 **gh-branch** 로 ./root 폴더로 푸시되는 것으로 한정한다는 설정을 해준다.

![Vuepress%20&%20%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%84%87%E1%85%B3%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%5B2%5D%20-%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%207abb3ed8a74e4a9ab3f0ae1dc9a3a498/_2020-09-29__12.07.41.png](Vuepress%20&%20%E1%84%80%E1%85%B5%E1%86%BA%E1%84%92%E1%85%A5%E1%84%87%E1%85%B3%20%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%5B2%5D%20-%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20%E1%84%86%E1%85%B5%E1%86%BE%20%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%207abb3ed8a74e4a9ab3f0ae1dc9a3a498/_2020-09-29__12.07.41.png)

docs폴더로 가서 터미널에 아래 명령어로 sh을 실행한다. 

> sh deploy.sh

뷰프레스를 이용한 결과물이 로드된다. 

## ! 추가 !

만약에 docs 내부 파일들을 수정한 후 [deploy.sh](http://deploy.sh) 을 실행하면 빌드 파일에는 수정 결과가 반영되어 깃 페이지에 로드 되지만 수정한 원본 파일은 master 브랜치로 따로 푸시해야 한다. 

[deploy.sh](http://deploy.sh)  상단에 아래 스크립트를 추가 하면 **master** 브랜치로 리포지토리에 수정 내역도 반영하고, 빌드 결과물도 **gh-pages** 브랜치를 통해 올라 간다. (빌드 결과물만 올라가도 상관은 없지만, 원본 파일도 리포지토리에 저장하고 싶어서...)

```json
git add -A
git commit -m "docs modified"
git push origin master
```

리포지토리에도, 깃허브 페이지에도 반영 되었다. 다만 깃허브 페이지는 시간이 좀 걸린다. 체감상 10분 정도 소요되는 것 같다.