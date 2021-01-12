# 펜 & 펜슬 & 그라디언트



## 펜툴 사용

- 단축키 : p
- 좌표 3개 이상 되면 fill color된다. 
- (도형을 그리면서 마무리 짓지 않고 )끝내고 싶으면, 영역 바깥(바탕)에 __cmd + 클릭__ 한다.
- alt : 점의 성격을 바꾼다.(곡선점 -> 직선점, 직선점 -> 곡선점)
- cmd : 점 이동, 수정, 추가, 삭제



### grid

- 정확한 직선을 그릴 수 있게 해 준다. 그리드가 보이지 않아도 스냅이 먹어서 

- 그리드 해제 : 풀다운 메뉴 view -> hide grid
- 스냅 해제 : 풀다운 메뉴 view -> snap to gridp



### 점 추가

1. 선 전체를 선택툴로 선택한다.
2. 펜 툴을 선택하고 선 위에 커서를 올린다.
3. 커서에 +아이콘이 붙으면 추가 가능한 상태이다. 
4. 해당 지점을 클릭 한다.



### 점 이동

- __cmd + 클릭 앤 드래그__
- 그냥 클릭만 하면 점이 삭제된다. 



### 이어 그리기

1. 선택툴로 선 전체를 선택하고 펜툴로 바꾼다.
2. 마지막 꼭지점을 클릭한다.
3. 이어 그릴 좌표를 클릭하면서 이어 그린다.



## 곡선

- 클릭 앤 드래그
- 드래그 하면 양 쪽 접선의 방향을 설정하는 휠이 나타나며 곡선을 그린다. 
- 곡선 해제 : 곡선이었던 마지막 점을 __alt + 클릭__
- 접선 방향 설정하는 휠을 이동하려면 휠의 끝 점을 __alt+클릭 앤 드래그__



### 선 타입 변경

1. 선 전체를 선택툴로 선택한다

2. 펜 툴을 선택하고, 직선점의 좌표를 alt + 클릭 앤 드래그

   

## shaper tool

- 단축키 : shift + n
- 도형 비슷하게 그리면 알아서 해당 도형을 완성해 준다. 





## 펜슬툴 사용

브러시툴과 비슷하며, 마우스 보다는 타블렛 등 펜마우스로 사용하는 것이 좋다. 



### options

펜슬툴을 패널로 빼고 더블클릭하면 옵션을 선택할 수 있다. 

- Fidelity > smooth 선택하면 곡선을 그렸을 때 부드럽게 표현된다.
- fill new stroke : 펜툴을 막힌 도형으로 처리하고 색을 넣는다. 
- Edit selected path : 좌표를 클릭하고 다른 선분을 이어 그리면 해당 선분으로 수정된다. 
- close path when ends are whitin : 설정된 픽셀 이하로 첫 좌표와 마지막 좌표가 만나면 닫힌 도형으로 만들어 준다. 
- Alt key toggles to smooth tool : alt키를 누른 상태에서 클릭하여 부드럽게 할 선분 옆에서 클릭 앤 드래그로 곡선을 그리면 부드러운 선분으로 만들어 준다. 



### smooth tool

Alt key toggles to smooth tool 과 같은 역할이다. 



### eraser tool

선택툴로 선택한 선분에 대고 클릭앤 드래그 하면 선분이 나뉘어 진다.



### join tool

나뉘어진 두 선분을 선택툴로 선택하고 양 끝점을 클릭 앤 드래그하여 이어주면 선분이 붙는다. 





## 그라디언트 툴 사용

- 툴패널에서 그라디언트를 선택한다.

- 옵션 툴의 그라디언트 바를 클릭하면 색을 추가할 수 있고, 특정 색 선택후 휴지통 아이콘을 클릭하면 해당 색을 삭제할 수 있다. 

- 도형 위에 그라디언트 편집 바를 나타내기 위해서는 그라디언트 패널의 edit gradient를 클릭한다. 
- 그라디언트 바를 이동시키려면 바 끝의 원형 점 혹은 바를 클릭 앤 드래그 한다.
- 그라디언트 바를 늘려 그라디언트 확장 정도를 조절하려면 바 끝의 사각형 점을 클릭 앤 드래그 한다. 해당 조작으로 그라디언트 바를 회전햐여 그라디언트 방향도 설정할 수 있다. 



### free gradient

- 그라디언트 툴의 세번째 옵션
- 도형 안에서 클릭함으로써 그라디언트 좌표를 추가하고, 색을 설정할 수 있다. 
- 포인트를 alt + 클릭 앤 드래하여 좌표를 이동시키거나 강도를 조절할 수 있다. 
- 옵션 패널에서 draw > lines를 선택하면 그라디언트 포인트들을 추가하면서 선분이 만들어지며, 닫힌 도형도 만들 수 있다. 



### stroke gradient

- stroke에도 그라디언트를 줄 수 있다.
- 개체 선택 후 그라디언트 패널을 열고, stroke에 그라디언트를 적용한다. 