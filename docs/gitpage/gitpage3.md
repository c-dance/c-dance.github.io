# 깃허브 페이지 & Vuepress[3]



## **Configuration**

공식 사이트 문서 :

[Configuration | VuePress](https://vuepress.vuejs.org/guide/basic-config.html#config-file)

## Config File

docs/.vuepress/config.js 파일 생성

```jsx
module.exports={
	title : "c-dance 공부 블로그"
}
```

## Theme Configuration

테마 설정에는 두 가지 방법이 있다.

(1) 디폴트 테마를 사용하면서 config.js 파일에 디폴트 테마의 요소들을 설정을 하는 것

(2) .vuepress/theme 폴더를 설계하면서 커스텀 테마를 만드는 것

- (1)의 방식을 따라함

```json
module.exports={
    title : "c-dance 공부 블로그",

    themeConfig: {
        logo : "/img/logo2.png", //default : public
        searchPlaceholder:"search...",
        lastUpdated: 'Last Updated',
        repo:'c-dance', // address -> github로 이동,
        smoothScroll:true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/About/' },
        ],
			}
}
```

### public 폴더

docs/.vuepress/public 폴더를 생성하면 이미지 자원(로고 이미지)가 있는 루트 폴더로 자동 인식한다.

docs/.vuepress/public/img/logo2.png 를 가져오려면 public 폴더 아래 path 부터 적어주면 된다.

### repo

깃허브 페이지로 이동시켜 준다.

https://github.com/ 뒤에 붙는  reposiotry 주소를 넣어주면 해당 repo로 이동한다.

### nav

네비게이션 바를 생성한다. docs가 루트이므로 Home 은 docs/README.md 페이지를 띄우고, About은 docs/[About.md](http://about.md) 페이지를 띄운다.

## Side Bar

사이드바는 정적인 페이지 리스트를 왼편에 띄운다.

- path : 카테고리가 되는 폴더 위치
- title : 사이드 바 카테고리로 쓸 이름
- children : 폴더 내부에 위치한 마크다운 파일(auto-sidebar관련 플러그인이나 다른 설정을 안 하면 일일이 적어주어야 한다)
- sidebarDepth : 문서를 클릭하면 마크다운 표기법 기준으로(#, ##, ### 등 헤더 레벨의 어느 수준까지 사이드바에 노출시킬 것인지 설정하는 것. 디폴트로 #(h1)가 사이드바로 노출된다)

```json
module.exports={

	themeConfig: {

		sidebar: [
            {
              title: 'Vue',   // required
              path: '/Vue/',      // optional, link of the title, which should be an absolute path and must exist
              initialOpenGroupIndex: -1,
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: ['/Vue/vue-cli']
            },
            {
              title: 'Algorithm',
              path  : '/Algorithm/',
              children: [ '/Algorithm/BruteForce/'],
              initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
            },
			         ]
			}
}
```

### 주의

- path

  Path이든, children 이든 [localhost:8080](http://localhost:8080) 뒤에 붙어야 하는 url문자 그대로 적어 주어야 한다.

  docs/Vue/index.md  → path : "/Vue/"

  docs/Vue/vuepress.md → children : "/Vue/vuepres"

- [README.md](http://README.md)

  폴더 하위에 [README.md](http://readme.md) 혹은 index.md파일이 있어야 한다. 사이드바를 클릭했을 때 자동으로 해당 파일이 읽기 때문에, 파일이 없으면 에러페이지가 나온다. 주소창으로 폴더 하위의 다른 파일 주소(...github.io/Vue/vuepress)를 입력하면 로드되지만, 폴더 주소(...github.io/Vue)를 입력하면 읽을 파일이 없어 404 에러가 난다.

### auto sidebar

[Automatic Dynamic Sidebars in Vuepress](https://techformist.com/automatic-dynamic-sidebar-vuepress/)

## 마크다운 이미지 삽입

- 이미지 소스를  docs/.vuepress/public/ 폴더 내부에 위치시킨다. 이미지의 빌드 결과물은 docs/.vuepress 폴더 안에 생성된다.
- 이미지 용량이 크면 로드하는 데 시간이 오래 걸리고, 100-200kb 정도면 적당하다.
- 마크다운 이미지 삽입 형식

```html
[img](이미지 위치)
	또는
<img src="이미지 위치" width=100% height=100%>
```

(예)

- 이미지 위치 : docs/.vuepress/public/sample/test1.png

- 마크다운 문서 : docs/sample/README.md

  ```html
  <img src="/sample/test1.png" width=80% height=80%>
  ```

(마크다운 표기법으로 하니까 이미지 로드가 안 되어서 위와 같이 했다. 원래는 마크다운 표기법으로 되어야 정상이다.)



- 공식 사이트에서 권장하는 방식 :

[Asset Handling | VuePress](https://vuepress.vuejs.org/guide/assets.html)