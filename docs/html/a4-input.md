# [tag] input



## Form

사용자의 입력을 받아 서버로 넘겨 주는 기능을 하는 태그



### \<form>

여러 입력 항목들을 포함하는 태그

속성 :

method : 사용자가 입력한 내용을 서버로 어떻게 넘겨줄 것인지 지정(post or get)

name : 폼의 이름, 한 문서 내에 폼이 여러 개 있을 수 있으므로 설정

action : 폼 하위의 입력 항목들에 대한 처리 설정

target : action에서 지정한 스크립트 파일을 다른 창에서 열도록 설정

autocomplete : 자동 완성 기능 (on or off)



### \<label>

폼 항목에 어떤 내용을 입력해야 하는지 알려 주는 레이블 태그



### \<fieldset>, \<legend>

폼 태그들을 하나의 영역으로 묶어주고(블록 아웃라인 생성)-filedset, 제목을 붙여 준다-legend

```html
<form>
	<fieldset>
			<legend>로그인</legend>
	<ul>
	<li>
		<label>아이디 입력</label>	
		<input type="text" id="id">
	</li>
	</ul>
	</fieldset>	
</form>
```



### \<input>

입력 항목들에 대한 처리를 위해 사용하는 태그

input태그의 속성

autofocus : 커서 표시

placeholder ="빈 칸 없이 입력해주세요" : 입력 내용에 대한 설명

required : 반드시 입력해야 함을 설정

readonly : 입력 불가. input태그의 value만 읽기 가능하다

min, max, step : 입력값(숫자)의 min, max, 값의 간격  제한

size, minlength, maxlength : 입력값(텍스트)가 입력 상자에 보이는 길이, 넣어야 할 텍스트의 최소 길이, 최대 길이 제한



### \<select>

입력 값을 셀렉트 리스트로 보여 준다

```html
<label>학력</label>
<select size="4">
		<option value="0">초졸</option>
		<option value="1">중졸</option>
		<option value="2">고졸</option>
		<option value="3">대졸</option>
</select>
```

하위 태그 : \<optgroup>

option들을 그룹핑한다.



### \<textarea>

한 줄 이상의 텍스트 입력 폼

속성 :

cols="3" : 3줄 입력

rows="100px" : 텍스트 영역의 너비가 100px



### \<button>

버튼 폼

속성 :

type="submit" : 입력 폼을 서버로 전송

type="reset" : 눌렀을 때 폼 입력값 초기화



### \<output>

계산 결과값이 출력되는 태그.



### \<progress>

진행률(진행 상황)을 알려주는 태그



### \<meter>

값(value)가 차지하는 크기 표시