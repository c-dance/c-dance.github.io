# Ps-사진배경




## 배경 늘리기

배경을 늘리고 개체를 중앙으로 옮겨주어 비율 문제 없이 자연스럽게 보이도록 한다. 



## Photomerge

1. 이어 붙일 사진 파일 여러개 오픈

2. 풀다운 메뉴 :  파일(file) → 자동화(automate) → photomerge → add open file

3. 비어있는 윤곽 정리 

   (1) 선택툴 : 크롭 → 잘라내기

   (2) cmd + t →  사진 확대

4. 레이어 합치기(layer-merge) : 레이어 패널에서 합칠 레이어 선택 + (cmd + e)



## content-aware scale

(1) 배경 사진위의 개체를 선택툴로 선택한다

(2) 풀다운 메뉴 selection → save selection : 아이 영역을 채널에 추가한다.

(3) 풀다운 메뉴 image → canvas size : 캔버스 사이즈를 늘려준다. 이미지 사이즈를 늘리면 이미지 자체가 가로로 넓어진다.

(4) 원본 레이어 copy본을 전체 선택한다.

(5) 풀다운 메뉴 edit → contents-aware scale 선택

(6) 옵편 패털에서 **protect : (2)에서 저장한 채널** 로 설정한다.

(7) 사진을 양쪽으로 늘려 준다.

(8-1) 개체 영역을 선택툴로 선태한다.

(8-2) 힐링 툴의 content-aware move tool을 선택한다.

(8-3) 선택 영역을 클릭 앤 드래그 하여 개체를 중앙으로 옮긴다.

(9-1) 개체 영역을 패치툴로 선택하고 옵션에서 destination으로 설정한다.

(9-2) 개체를 클릭 앤 드래그하여 중앙으로 옮긴다.

(9-3) 개체가 원래 있었던 영역을 content-aware fill로 주변 색상값으로 채워준다.

(9-4) healing brush tool 로 마무리 한다. 



## 배경 붙여넣기

(1) 원본 이미지에서 배경을 퀵 셀렉션 툴로 선택한다.

(2) 옵션 패널에서 __select and mask__ 를 선택한다.

(3) 오른쪽 패널 properties에서 refine edge 선택.

- view : overlay
- indicates : selected areas
- 왼쪽 브러시 패널에서 refine 브러시를 선택하여 윤곽을 정리한다.
- ok 클릭

(4) 윤곽을 정리한 후 레이어로 돌아와 반전 선택 후(배경 아닌 사물, 풍경 선택) 새 레이어에 붙여 넣는다. (이렇게 하면 배경을 제외한 이미지만 가져오게 된다. 

(5) 새 레이어를 추가한 뒤 배경이 될 이미지를 복사하여 가져온다. (4)에서 만든 레이어 아래에 깔아서 배경이 뒤에 깔리도록 한다.

(6) 인물이 있는 (4)의 레이어를 선택한 후 풀다운 메뉴 image → adjustment → color balance 를 선택하여 배경에 맞게 이미지 색상을 보정한다.



## 광각 사진 보정

좁은 공간을 넓게 보여주려고 할 때, 원근감을 주어 표현하는데 공간이 지나치게 휘어 부자연스럽게 나오는 경우가 많다. 해당 부분을 보정할 수 있다.

1. adaptive wide angle

   - 풀다운 메뉴 filter -> adaptive wide angle

   - 왼쪽 툴 패널에 constraint tool이 선택된 상태에서 휘어진 공간을 따라 좌표를 클릭 하여 찍는다. 
   - 찍은 좌표를 따라 휘어진 공간이 펴진다. 휘어진 수평, 수직 부분을 수정한다.
   - 손실된 레이어는 스탬프 툴 및 힐링 툴로 보정한다. 

2. Lens correction
   - 풀다운 메뉴 filter -> Lens correction -> 오른쪽 패널에서 custom 탭 클릭
   - geometric distortion 조절
   - vertical perspective, horizontal perspective 조절
   - vignette는 명암 효과(필름 효과)를 준다. 



## 사진에 원근감 주기

- 풀다운 메뉴 filter -> blur gallery -> tilt-shift :

- 거리감에 따라 블러 처리를 해 준다.



## select and mask

이미지의 경계를 뚜렷하게 하거나 넓히거나 좁힐 때 사용한다.

1. 원본 이미지의 복사본 생성
2. 개체 선택(또는 레이어 선택 후  미리 따 놓은
3. path를 cmd+클릭) 후 상위 옵션 패널에서 __select and mask__ 선택
4. 개체의 경계 부분 조절 : 
   - featehr(부드럽게 하기)
   - contrast(뚜렷하게 하기)
   - shift edge(경계 옮기기-바깥 혹은 안쪽)
5. Output to : new layer 선택 -> 새 레이어로 생성