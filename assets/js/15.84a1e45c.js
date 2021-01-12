(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{371:function(t,s,a){"use strict";a.r(s);var n=a(42),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-포지션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-포지션"}},[t._v("#")]),t._v(" [CSS] 포지션")]),t._v(" "),a("p",[t._v("position은 요소들을 자유자재로 배치해주는 속성이다.")]),t._v(" "),a("p",[t._v("Css 포지셔닝은 웹 문서의 레이아웃을 만드는 것을 가리키고, 박스모델의 배치를 통해 전체 레이아웃을 만든다.")]),t._v(" "),a("p",[t._v("position 속성값으로 static, relative, absolute, fixed, sticky가 있다.")]),t._v(" "),a("h2",{attrs:{id:"position-static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-static"}},[t._v("#")]),t._v(" position : static")]),t._v(" "),a("p",[t._v("기본값.")]),t._v(" "),a("p",[t._v("작성할 때 요소들을 나열한 순서대로 배치한다.")]),t._v(" "),a("p",[t._v("top, right같은 속성을 사용할 수 없고, float을 사용하여 좌우 배치는 가능하다.")]),t._v(" "),a("h2",{attrs:{id:"position-relative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-relative"}},[t._v("#")]),t._v(" position : relative")]),t._v(" "),a("p",[t._v("요소들이 나열한 순서대로 배치되며, top, right 등의 속성을 사용할 수 있다.")]),t._v(" "),a("p",[t._v("좌표값을 사용하여 위치를 정하며, 기준 좌표는 static 이었을 때 (원래 위치해야 했던)좌표이다.")]),t._v(" "),a("p",[t._v("기준 좌표의 [top, right, bottm, left] 로 부터 양수만큼 떨어져 있는 혹은 음수만큼 들어가 있는 상대적 좌표로 설정 가능하다.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"position-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-absolute"}},[t._v("#")]),t._v(" position : absolute")]),t._v(" "),a("p",[t._v("요소의 나열 순서와 상관 없이 위치시키는 속성.")]),t._v(" "),a("p",[t._v("absolute의 기준 좌표는 가장 가까운 부모/조상 요소 중 position : relative 인 요소의 좌표 값이다.")]),t._v(" "),a("p",[t._v("때문에 position : relative 인 부모 요소를 만들어 주고 사용한다.")]),t._v(" "),a("p",[t._v("(만약 부모 박스 모델에 relative 설정을 안 해 주면 최상위 부모 박스 요소(<html>)가 기준 좌표가 된다. 또한 __부모 모델의 영향을 벗어난다. __부모 모델 또한 해당 모델과의 링크를 잃는다.)")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#wrap .box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"position-fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed"}},[t._v("#")]),t._v(" position : fixed")]),t._v(" "),a("p",[t._v("스크롤링하여도 고정된 위치에서 벗어나지 않는다. "),a("strong",[t._v("<html>이 기준 좌표가 되어 부모 요소의 위치에서도 벗어난다.")])]),t._v(" "),a("p",[t._v("absolute와 속성이 비슷하여 부모 요소와의 링크를 잃게 된다.")]),t._v(" "),a("h2",{attrs:{id:"position-sticky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-sticky"}},[t._v("#")]),t._v(" position : sticky")]),t._v(" "),a("p",[t._v("스크롤링하여도 고정된 위치에서 벗어나지 않는다.")])])}),[],!1,null,null,null);s.default=p.exports}}]);