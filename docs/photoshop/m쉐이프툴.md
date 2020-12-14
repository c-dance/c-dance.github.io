# Ps-쉐이프 툴



## 사용

1. 툴 패널에서 shape tool 선택 
   - 옵션 패널에서 fill, stroke 설정
   - 클릭 앤 드래그로 shape 그리기 
   - layer : 하나 그릴 때 마다 새 레이어위에 올려진다. 만약 여러개의 shape을 합칠 때는(combine shape) 하나의 레이어에 개체가 올라 간다.
   - path : 최근에 그린 개체의 path만 추가되므로, 하나를 만들 때 마다 path를 더블 클릭하여 __save path__ 해줘야 한다. 

2. properties 설정
   - fill, stroke, 모서리 모양 등 설정할 수 있다.
   - stroke에서 점선 선택 후 __capt type for stroke__의 round cap을 설정하면 점선의 모서리가 둥글어진다. 점선 각 실선들 양 끝에 반원이 추가된다.
   - stroke에서 바깥 선이 윤곽의 외부/내부/중앙에 위치시키는 것을 __aligh type of stroke__ 로 지정할 수 있다.
3. 옵션에서 combine, subtract, itersect 등 선택 적용할 수 있다.



### rounded ractangle tool

- 그리기 전에 모서리의 각도를 지정해야 한다. (옵션 패널에서 원의 반지름 크기를 설정한다)

- 그린 후에는 properties에서 모서리 모양을 재설정 할 수 있다.

- 말풍선 그리기 : 원 하나를 그린 후 화살표 툴(direct selection tool) & combine shapes를 선택한 후 __alt + 클릭 앤 드래그__ 한다. 하나의 레이어에 말풍선 모양이 생성된다. 말풍선 꼬리는 말풍선 윤곽에 첫 좌표를 찍고 펜툴로 붙인다.

  

### polygon tool

- 옵션 패널에서 각도를 몇 개 만들지 설정할 수 있다.(몇각형을 만들지)

  

### line tool

- weight로 굵기 조절
- 옵션 패널의 설정 아이콘 클릭 -> arrow heads : start, end 를 체크 하면 화살표가 생긴다 

### custom shape

- 미리 그려진 모양을 옵션 패털의 shape에서 선택한 후 클릭 앤 드래그하여 그린다.
- Fill, stroke로 바깥선과 색상 설정한다.
- 풀다운 메뉴 window -> shape 한 후 더보기 설정(가로선 세 개) 아이콘을 누른다. 메뉴에서 __legacy shapes and more__을 클릭하여 구버전 custom shape를 추가한다.