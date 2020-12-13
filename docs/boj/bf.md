# 브루트포스



백준 코드플러스 문제집의 순열, 재귀 파트.



주로 재귀, 백트래킹, 깊이 우선 탐색의 개념을 갖고 풀이한다. 

- 브루트포스 : 모든 경우의 수 탐색(특정 조건에서는 탐색 중단)
- 재귀 : 특정 조건에서는 탐색을 중단하고 결과값을 낸다.(base condition)
- 백트래킹 : 재귀 실행으로 넘어가기 전에 답을 낼 조건이 아니면 탐색하지 않고 상위로 되돌아간다.
- 깊이 우선 탐색 : 경우의 수를 찾아들어가는 것으로, 깊이(카운트)를 가지면서 탐색한다.



이렇게 문제를 풀려면, 아래와 같이 메서드를 구현해야 한다. 

- 재귀 메서드 구현 : 특정 조건에서는 중단하고 결과를 처리하도록 구현한다.
- 백트래킹 : 메서드가 모든 노드(경우, 조건)를 탐색하도록 구현한다. 재귀 메서드에 인자를 줄 때, 모든 노드를 탐색하는 방향으로 코드를 짠다.
- 깊이 우선 탐색 : 인자에 depth 변수를 같이 갖고 간다. (이렇게 만드는 메서드가 다수)
- 백트래킹 : 특정 조건에서는(이미 방문했던 노드일 때, 모든 노드를 방문했을 때, 문제에서 준 제약을 어길 때) 탐색을 중단하고 되돌아 가도록 한다. 되돌아 갈 때 만약 방문 처리 배열을 만들었으면 해제 해 주어야 한다.



## 1987 알파벳

세로 R칸, 가로 C칸으로 된 표 모양의 보드가 있다. 보드의 각 칸에는 대문자 알파벳이 하나씩 적혀 있고, 좌측 상단 칸 (1행 1열) 에는 말이 놓여 있다.

말은 상하좌우로 인접한 네 칸 중의 한 칸으로 이동할 수 있는데, 새로 이동한 칸에 적혀 있는 알파벳은 지금까지 지나온 모든 칸에 적혀 있는 알파벳과는 달라야 한다. 즉, 같은 알파벳이 적힌 칸을 두 번 지날 수 없다.

좌측 상단에서 시작해서, 말이 최대한 몇 칸을 지날 수 있는지를 구하는 프로그램을 작성하시오. 말이 지나는 칸은 좌측 상단의 칸도 포함된다.

### 입력

첫째 줄에 R과 C가 빈칸을 사이에 두고 주어진다. (1 ≤ R,C ≤ 20) 둘째 줄부터 R개의 줄에 걸쳐서 보드에 적혀 있는 C개의 대문자 알파벳들이 빈칸 없이 주어진다.

### 출력

첫째 줄에 말이 지날 수 있는 최대의 칸 수를 출력한다.

### 예제 입력 

```
2 4
CAAB
ADCB
```

### 예제 출력 

```
3
```



### 풀이

- 깊이 우선 탐색으로, 모든 경우의 수를 탐색.
- 탐색이 불가능할 경우(지났던 알파벳을 만나는 경우) 이동한 칸의 갯수를 저장하고 중단하도록 한다. 
- 탐색이 불가능할 경우(보드 외부의 칸일 경우) 탐색하지 않는다.
- 받은 좌표는 방문처리하고, 해당 탐색에만 방문 처리가 유효하도록 방문 해제한다.
- 방문 처리는 알파벳을 받을 때 정수화하여 인덱스로 처리한다. 

### 코드

```java
import java.io.*;
import java.util.*;

public class Main {
    static int[][] board;
    static int res=0;
    static int r, c;
    static boolean[] visited = new boolean[26];
    static int[] dx = {0, 0, 1, -1}; //이동 칸
    static int[] dy = {1, -1, 0, 0};

    public static void main(String[] args) throws IOException{
        //File f = new File("src/input.txt");
        //BufferedReader br = new BufferedReader(new FileReader(f));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] s = br.readLine().split(" ");
        r = Integer.parseInt(s[0]);
        c = Integer.parseInt(s[1]);
        board = new int[r][c];
        for(int i = 0; i<r; i++){
            String str = br.readLine();
            for(int j = 0; j<c; j++){
                board[i][j] = str.charAt(j)-'A';//인덱스 값을 통한 방문 체크 위해 정수값으로 변환
            }
        }
        DFS(0, 0, 0);
        System.out.println(res);
    }
    public static void DFS(int x, int y, int depth){
        if(visited[board[x][y]]){ //보드 칸의 알파벳이 방문한 알파벳이면 중단
            res = Math.max(res, depth);
            return;
        }
        visited[board[x][y]] = true; //해당 칸은 방문한 것으로 체크
        for(int i = 0; i<4; i++){
            int next_x = x + dx[i];
            int next_y = y + dy[i];
            if(next_x>=0 && next_y>=0 && next_x<r && next_y<c){
                    DFS(next_x, next_y, depth+1); //보드 칸 외부이면 pass
                }
            }
        visited[board[x][y]] = false; //보드 칸 외부이면 방문 해제
        }
    }


```





## 14889 스타트와 링크

오늘은 스타트링크에 다니는 사람들이 모여서 축구를 해보려고 한다. 축구는 평일 오후에 하고 의무 참석도 아니다. 축구를 하기 위해 모인 사람은 총 N명이고 신기하게도 N은 짝수이다. 이제 N/2명으로 이루어진 스타트 팀과 링크 팀으로 사람들을 나눠야 한다.

BOJ를 운영하는 회사 답게 사람에게 번호를 1부터 N까지로 배정했고, 아래와 같은 능력치를 조사했다. 능력치 Sij는 i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치이다. 팀의 능력치는 팀에 속한 모든 쌍의 능력치 Sij의 합이다. Sij는 Sji와 다를 수도 있으며, i번 사람과 j번 사람이 같은 팀에 속했을 때, 팀에 더해지는 능력치는 Sij와 Sji이다.

N=4이고, S가 아래와 같은 경우를 살펴보자.

| i\j  | 1    | 2    | 3    | 4    |
| :--- | :--- | :--- | :--- | :--- |
| 1    |      | 1    | 2    | 3    |
| 2    | 4    |      | 5    | 6    |
| 3    | 7    | 1    |      | 2    |
| 4    | 3    | 4    | 5    |      |

예를 들어, 1, 2번이 스타트 팀, 3, 4번이 링크 팀에 속한 경우에 두 팀의 능력치는 아래와 같다.

- 스타트 팀: S12 + S21 = 1 + 4 = 5
- 링크 팀: S34 + S43 = 2 + 5 = 7

1, 3번이 스타트 팀, 2, 4번이 링크 팀에 속하면, 두 팀의 능력치는 아래와 같다.

- 스타트 팀: S13 + S31 = 2 + 7 = 9
- 링크 팀: S24 + S42 = 6 + 4 = 10

축구를 재미있게 하기 위해서 스타트 팀의 능력치와 링크 팀의 능력치의 차이를 최소로 하려고 한다. 위의 예제와 같은 경우에는 1, 4번이 스타트 팀, 2, 3번 팀이 링크 팀에 속하면 스타트 팀의 능력치는 6, 링크 팀의 능력치는 6이 되어서 차이가 0이 되고 이 값이 최소이다.

### 입력

첫째 줄에 N(4 ≤ N ≤ 20, N은 짝수)이 주어진다. 둘째 줄부터 N개의 줄에 S가 주어진다. 각 줄은 N개의 수로 이루어져 있고, i번 줄의 j번째 수는 Sij 이다. Sii는 항상 0이고, 나머지 Sij는 1보다 크거나 같고, 100보다 작거나 같은 정수이다.

### 출력

첫째 줄에 스타트 팀과 링크 팀의 능력치의 차이의 최솟값을 출력한다.

### 예제 입력

```
4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0
```

### 예제 출력 

```
0
```

```java
import java.io.*;
import java.util.*;

public class Main {
    static int N;
    static int[][] skills;
    static ArrayList<Integer> start;
    static ArrayList<Integer> link;
    static boolean visited[]; //팀짜기 체크
    static int min = Integer.MAX_VALUE;
  
    public static void main(String[] args) throws IOException{
        //File f = new File("./input.txt");
        //BufferedReader br = new BufferedReader(new FileReader(f));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        skills = new int[N][N]; //점수 행렬
        visited = new boolean[N]; //멤버 체크(true : 스타트팀, false : 링크팀)

        for(int i = 0; i<N; i++){
            String[] s = br.readLine().split(" ");
            for(int j = 0; j<N; j++){
                skills[i][j] = Integer.parseInt(s[j]);
            }
        }

        setTeam(0, 0);

        System.out.println(min);
    }

    public static void setTeam(int num, int cnt){
        if(cnt==N/2){ //팀 구성이 끝나면
            for(int i=0; i<N; i++){
                min = Math.min(min, getDiffers());
            }
        }else{
            for(int i = num; i<N; i++){
                if(!visited[i]){
                    visited[i] = true; //스타트팀으로 영입
                    setTeam(i+1, cnt+1); //재귀 돌며 계속 팀 구성
                    visited[i] = false;
                }
            }
        }
    }

    public static int getDiffers(){ //점수차이 반환 메서드
        int sum_start = 0;
        int sum_link = 0;
        for(int i = 0; i<N;i++){
            for(int j = 0; j<N;j++){
                if(visited[i]&&visited[j]){
                    sum_start+=skills[i][j]; //스타트팀
                }
                if(!visited[i]&&!visited[j]){
                    sum_link += skills[i][j]; //링크팀
                }
            }
        }
        return Math.abs(sum_start-sum_link);
    }
}
```

