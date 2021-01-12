# [tag] list & table



## 리스트 태그

목록을 만들어 주는 태그이다.

### \<ul>

unordered list, 순서가 없는 리스트. 리스트 요소 앞에 작은 원(bullet)이 기본적으로 붙는다. 이 원은 css 설정으로 바꿀 수 있다.

### \<ol>

ordered list, 순서가 있는 리스트. 리스트 요소 앞에 아라비아 숫자가 기본적으로 붙는다.

### \<li>

ul과 il의 리스트 요소 태그.

### \<dl>

description list, 정의하여 쓰는 리스트.

하위 태그 : <dt> 리스트 요소의 이름 , <dd> 리스트 요소의 설명(정의)



## 테이블 태그

테이블(표)를 만들어 주는 태그이다. 태그는 '행 x 열'로 표현한다.

### \<table>

테이블 전체를 만든다.

### \<tr>

행을 만든다

### \<th>

행 안에 포함되는 타이틀 셀이다. (header cell). 보통 한 줄로 나열되도록 한다.

### \<td>

행 안에 포함되는 데이터 셀이다. (data cell)

### colspan

\<td>의 속성.  colspan="합칠 셀의 갯수" 만큼 왼쪽에서 오른쪽으로 셀을 합친다.

### rowspan

\<td>, \<th>의 속성. rowspan="합칠 셀의 갯수"만큼 위에서 아래로 셀을 합친다.

### \<caption>

테이블의 제목. \<table>\</table> 태그 안에서 사용한다.

### \<figurecaption>

테이블의 제목. 아래와 같은 구조로 쓴다.

```jsx
<figure>
	<figurecaption>
		테이블 제목
	</figurecaption>
		<table>
			...
		</table>
</figure>
```

### \<thead>, \<tbody>, \<tfoot>

테이블을 머릿단, 본문, 하단(요약, 총계 부분)으로 나누는 태그다. 표의 구조를 이렇게 나누면 시각장애인들도 화면 낭독기를 통해 표의 구조를 쉽게 이해할 수 있다.

```jsx
<table>
	<thead>
		<th>
		...
		</th>
	</thead>
	<tbody>
		<td>
		...
		</td>
	</tbody>
	<tfoot>
		<td>
		...
		</td>
	</tfoot>
</table>
```

### \<colgroup>, \<col>

열마다 다른 css스타일을 적용시키기 위한 태그

