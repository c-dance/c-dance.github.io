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

  


### polygon tool

- 옵션 패널에서 각도를 몇 개 만들지 설정할 수 있다.(몇각형을 만들지)

  

### line tool

- weight로 굵기 조절
- 옵션 패널의 설정 아이콘 클릭 -> arrow heads : start, end 를 체크 하면 화살표가 생긴다 

### custom shape

- 미리 그려진 모양을 옵션 패털의 shape에서 선택한 후 클릭 앤 드래그하여 그린다.
- Fill, stroke로 바깥선과 색상 설정한다.
- 풀다운 메뉴 window -> shape 한 후 더보기 설정(가로선 세 개) 아이콘을 누른다. 메뉴에서 __legacy shapes and more__을 클릭하여 구버전 custom shape를 추가한다.
- 검색 : 풀다운 메뉴 window -> shapes 선택하면 새 패널에 검색창이 함께 뜬다. 



## 말풍선 그리기

1.  원 하나를 그린 후 화살표 툴(direct selection tool) & combine shapes를 선택한 후 __alt + 클릭 앤 드래그__ 한다. 내부의 여백은 rectangle tool로 채워준다.

2. 말풍선 꼬리는 펜툴을 선택하고 combine shapes 옵션을 준 채로  그려주면 하나의 레이어에 말풍선이 그려진다.

3. 말풍선 내에 들어갈 이미지를 말풍선 레이어 위에 복사해 온다.

4. 이미지 레이어에 클립핑 마스크를 만들어 주면 말풍선 안에 이미지가 들어간다. 

   

## 패턴 그리기

땡땡이 패턴을 만들어 본다.

1. 100x100 문서가 있을 때, vertical(20, 45, 70), hrizontal(20, 45, 70)의 가이드 라인을 만들어 준다. (풀다운 메뉴 view -> new guide 생성, snap 체크)
2. 쉐이프툴의 elipse tool로 원을 그려 준다. 가이드라인 교차점이 원의 중앙이 되도록 한다. 가이드라인의 교차 점을 클릭하고 __alt+shift__ 를 누른 상태에서 10x10크기의 원을 그린다.(원의 크기는 그릴 때 작은 창으로 나타난다.)
3. 화살표 선택 툴로 바꾸고 원을 __alt + 클릭 앤 드래그__ 하여 가이드라인의 교차점마다 복사, 붙여넣기 해 준다. 