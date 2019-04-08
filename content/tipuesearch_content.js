var tipuesearch = {"pages": [{'title': 'Introduction', 'text': '組員: \n 40623201  王君庭 \n 40623204  張晏晴 \n 40623217  楊傅博\xa0\xa0 \n 40623223  任明彥 \n 40623229  陳宥安 \n 40623232  余建杰 \n 40623242  高宇辰 \n 40623243  盧逸誠 \n 40623244  林俊鎧 \n 40623248  廖柏誠 \n 40423220  林易寬 \n 本倉儲位於: https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g5 \n \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Course content', 'text': 'week1 \n week2 \n week3 \n week4 \n week5 \n week6 \n week7 \n', 'tags': '', 'url': 'Course content.html'}, {'title': 'week1', 'text': '上課內容：建立 Windows 64 位元可攜程式系統。 \n 1.下載  Python 3.7.2，選擇\xa0\xa0 Windows x86-64 executable installer \xa0。 \n \n \n \n 2.安裝 Python 。 \n \n \n \n \n 3.下載  HxD \xa0。 \n \n 4.打開 HxD 後，更改 pip 。 \n \n \n \n 5.下載  SciTE \xa0。 \n \n \n 6.修改 code.page 使中文可在 SciTE上顯示。 \n \n \n \n 7.下載\xa0 KDiff \xa0(用來比較差異性的工具)。 \n \n \n 8.下載  TCC \xa0(Tiny C Compiler)。 \n \n 9.修改 start.bat 及 stop.bat。 \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '上課內容: \n 如何使用 ungit 進行檔案推送及版本的推還確認 \n 1.先在y的home內部進行user config綁定 \n \n \n 2.到python wsgi.py動態網站更改部分的資料 \n 3.接著開啟ungit後進行commit上傳 \n \n 4.上傳後再push即可更改成功 \n \n 5.到warehousing尋找commit recond \n \n 如何運用ungit回推版本: \n 1.先開啟ungit，並將某一個歷程編上tag \n \n 2.使用指令 git checkout 到所要的歷程，如下圖是到expw4-18，再開啟python wsgi.py確定是否回歸到版本。 \n \n 3.接著回到當前版本需要使用指令 git checkout -- config/content.htm ， 接著用git checkout delprogress回到當前版本。 \n \n 4.再次回到python wsgi.py內察看是否回到當前版本 \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': '上課內容： 在可攜程式系統中加上 ungit 、利 用 ssh 與 private key 對 Github 倉儲提交推送 。 \n 1.下載\xa0 cdb w4 版本.7z \xa0+\xa0 nodejs_with_ungit.7z ， ( ungit 設定說明 ) 。 \n \n 2.解壓縮後將 nodejs 放到\xa0cd2019_cdb_w4 的 y 內。 \n \n 3.更改 start.bat 路徑，可參考 ungit 設定說明 \xa0。 \n \n 4. clone  cmstest  的倉儲。 \n \n 5.設定 kungit 。 \n \n 6.\xa0 \n \n \n \n \n', 'tags': '', 'url': 'week4.html'}, {'title': 'week5', 'text': '', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '', 'tags': '', 'url': 'week7.html'}, {'title': 'Git http&SSH', 'text': '利用 ssh 對 git 改版, 必須使用\xa0 home/.ssh/config 設定, 才能透過 proxy 伺服器進行連線, 由於在 IPv6 環境下, 必須要透過 proxy 才能對 Git 連線, 因此若無 config, 無法對遠端改版 \n', 'tags': '', 'url': 'Git http&SSH.html'}, {'title': 'Preceding operation', 'text': 'Directory structure \n Page editing \n Insert program \n Internet newsletter \n Pelican edit \n', 'tags': '', 'url': 'Preceding operation.html'}, {'title': 'Directory structure', 'text': '第二位想要編輯這裡 \n \n CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n 還有這裡 \n 首先修改這裡 \n', 'tags': '', 'url': 'Directory structure.html'}, {'title': 'Page editing', 'text': 'CMSimfly 動態系統的網際編輯器採用  TinyMCE4 , 可以放入一般超文件,\xa0 納入圖檔, 嵌入影片連結, 並且加入帶有行數的原始碼. \n 透過 File Upload 功能, 可以一次上傳多個檔案,\xa0 存入 downloads 目錄中儲存, 之後各頁面可以引入對應連結. \n 而圖檔的上傳與引用與一般檔案類似, 但上傳後存入 images 目錄中. \n', 'tags': '', 'url': 'Page editing.html'}, {'title': 'Insert program', 'text': 'CMSimfly 目前使用 Syntaxhighlighter 3.0.83: \n \xa0 http://alexgorbatchev.com/SyntaxHighlighter/ \xa0 \n 進行頁面中的程式碼高亮顯示. \n \n Java\xa0 program \n import java.util.Scanner;\n\npublic class Life {\n    public static void show(boolean[][] grid){\n        String s = "";\n        for(boolean[] row : grid){\n            for(boolean val : row)\n                if(val)\n                    s += "*";\n                else\n                    s += ".";\n            s += "\\n";\n        }\n        System.out.println(s);\n    }\n    \n    public static boolean[][] gen(){\n        boolean[][] grid = new boolean[10][10];\n        for(int r = 0; r < 10; r++)\n            for(int c = 0; c < 10; c++)\n                if( Math.random() > 0.7 )\n                    grid[r][c] = true;\n        return grid;\n    }\n    \n    public static void main(String[] args){\n        boolean[][] world = gen();\n        show(world);\n        System.out.println();\n        world = nextGen(world);\n        show(world);\n        Scanner s = new Scanner(System.in);\n        while(s.nextLine().length() == 0){\n            System.out.println();\n            world = nextGen(world);\n            show(world);\n            \n        }\n    }\n    \n    public static boolean[][] nextGen(boolean[][] world){\n        boolean[][] newWorld \n            = new boolean[world.length][world[0].length];\n        int num;\n        for(int r = 0; r < world.length; r++){\n            for(int c = 0; c < world[0].length; c++){\n                num = numNeighbors(world, r, c);\n                if( occupiedNext(num, world[r][c]) )\n                    newWorld[r][c] = true;\n            }\n        }\n        return newWorld;\n    }\n    \n    public static boolean occupiedNext(int numNeighbors, boolean occupied){\n        if( occupied && (numNeighbors == 2 || numNeighbors == 3))\n            return true;\n        else if (!occupied && numNeighbors == 3)\n            return true;\n        else\n            return false;\n    }\n\n    private static int numNeighbors(boolean[][] world, int row, int col) {\n        int num = world[row][col] ? -1 : 0;\n        for(int r = row - 1; r <= row + 1; r++)\n            for(int c = col - 1; c <= col + 1; c++)\n                if( inbounds(world, r, c) && world[r][c] )\n                    num++;\n\n        return num;\n    }\n\n    private static boolean inbounds(boolean[][] world, int r, int c) {\n        return r >= 0 && r < world.length && c >= 0 &&\n        c < world[0].length;\n    }\n\n} \n \n \n Python\xa0 program \n def parse_content():\n    """use bs4 and re module functions to parse content.htm"""\n    #from pybean import Store, SQLiteWriter\n    # if no content.db, create database file with cms table\n    \'\'\'\n    if not os.path.isfile(config_dir+"content.db"):\n        library = Store(SQLiteWriter(config_dir+"content.db", frozen=False))\n        cms = library.new("cms")\n        cms.follow = 0\n        cms.title = "head 1"\n        cms.content = "content 1"\n        cms.memo = "first memo"\n        library.save(cms)\n        library.commit()\n    \'\'\'\n    # if no content.htm, generate a head 1 and content 1 file\n    if not os.path.isfile(config_dir+"content.htm"):\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n    subject = file_get_contents(config_dir+"content.htm")\n    # deal with content without content\n    if subject == "":\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n        subject = "<h1>head 1</h1>content 1"\n    # initialize the return lists\n    head_list = []\n    level_list = []\n    page_list = []\n    # make the soup out of the html content\n    soup = bs4.BeautifulSoup(subject, \'html.parser\')\n    # 嘗試解讀各種情況下的標題\n    soup = _remove_h123_attrs(soup)\n    # 改寫 content.htm 後重新取 subject\n    with open(config_dir + "content.htm", "wb") as f:\n        f.write(soup.encode("utf-8"))\n    subject = file_get_contents(config_dir+"content.htm")\n    # get all h1, h2, h3 tags into list\n    htag= soup.find_all([\'h1\', \'h2\', \'h3\'])\n    n = len(htag)\n    # get the page content to split subject using each h tag\n    temp_data = subject.split(str(htag[0]))\n    if len(temp_data) > 2:\n        subject = str(htag[0]).join(temp_data[1:])\n    else:\n        subject = temp_data[1]\n    if n >1:\n            # i from 1 to i-1\n            for i in range(1, len(htag)):\n                head_list.append(htag[i-1].text.strip())\n                # use name attribute of h* tag to get h1, h2 or h3\n                # the number of h1, h2 or h3 is the level of page menu\n                level_list.append(htag[i-1].name[1])\n                temp_data = subject.split(str(htag[i]))\n                if len(temp_data) > 2:\n                    subject = str(htag[i]).join(temp_data[1:])\n                else:\n                    subject = temp_data[1]\n                # cut the other page content out of htag from 1 to i-1\n                cut = temp_data[0]\n                # add the page content\n                page_list.append(cut)\n    # last i\n    # add the last page title\n    head_list.append(htag[n-1].text.strip())\n    # add the last level\n    level_list.append(htag[n-1].name[1])\n    temp_data = subject.split(str(htag[n-1]))\n    # the last subject\n    subject = temp_data[0]\n    # cut the last page content out\n    cut = temp_data[0]\n    # the last page content\n    page_list.append(cut)\n    return head_list, level_list, page_list\n\n \n \n \n C或C++\xa0 program \n 請注意, 目前 CMSimfly 標題內文無法解讀 "/" 符號, 因此若本頁面的標題為\xa0 "C/C++程式碼", 則無法進行分頁. \n /* Runge Kutta for a set of first order differential equations */\n \n#include <stdio.h>\n#include <math.h>\n \n#define N 2 /* number of first order equations */\n#define dist 0.1 /* stepsize in t*/\n#define MAX 30.0 /* max for t */\n \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n \nvoid main(){\n \n  double t, y[N];\n  int j;\n \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n \n  y[0]=1.0; /* initial position */\n  y[1]=0.0; /* initial velocity */\n \n  //fprintf(output, "0\\t%f\\n", y[0]);\n \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n \n  fclose(output);\n  fclose(output1);\n \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"test.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n\n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n}\n \nvoid runge4(double x, double y[], double step){\n \n  double h=step/2.0, /* the midpoint */\n  t1[N], t2[N], t3[N], /* temporary storage arrays */\n  k1[N], k2[N], k3[N],k4[N]; /* for Runge-Kutta */\n  int i;\n \n  for (i=0;i<N;i++){\n \n    t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    k4[i]= step*f(x+step, t3, i);\n  }\n \n  for (i=0;i<N;i++){\n \n    y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0;\n  }\n}\n \ndouble f(double x, double y[], int i){\n \n  if (i==0)\n    x=y[1]; /* derivative of first equation */\n  if (i==1)\n    x=-y[0]-0.5*y[1];\n  return x;\n} \n \n \n Lua\xa0 program \n -- 導入 js 模組\njs = require("js")\n-- 取得 window\nwindow = js.global\n-- 猜小於或等於 n 的整數\nbig = 100\n-- 計算猜測次數, 配合 while 至少會猜一次\nnum = 1\n-- 利用 window:prompt 方法回應取得使用者所猜的整數\nguess = window:prompt("請猜一個介於 1 到 "..big.." 的整數")\n-- 利用數學模組的 random 函數以亂數產生答案\nanswer = math.random(big)\noutput = ""\n-- 若沒猜對, 一直猜到對為止\nwhile answer ~= tonumber(guess) do\n    if answer > tonumber(guess) then\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too small"\n        print(output)\n    else\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too big"\n        print(output)\n    end \n    guess = window:prompt(output..", 請猜一個介於 1 到 "..big.." 的整數")\n    num = num + 1\nend\nprint("總共猜了 "..num.." 次, answer=guess="..answer.." - correct")\n     \n \n \n Javascript\xa0 program \n STLViewer = function(stlpath, plotarea) {\n\n\tvar mycanvas = document.getElementById(plotarea);\n\tvar viewer = new JSC3D.Viewer(mycanvas)\n\tvar theScene = new JSC3D.Scene;\n\t////Initialize with a default file:\n\t//var stlpath = "../../../assets/2013-10-23/stl/box.STL"\n\t//var stlpath = "../../../assets/2013-10-23/stl/taj.stl"\n\tviewer.setParameter(\'SceneUrl\', stlpath);\n    viewer.setParameter(\'InitRotationX\', 20);\n\tviewer.setParameter(\'InitRotationY\', 20);\n\tviewer.setParameter(\'InitRotationZ\', 0);\n\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\tviewer.init();\n\tviewer.update();\n\t////init done\n\tvar canvas_drop = document.getElementById(\'canvas-drop\')\n\t/*var dropzone = document.getElementById(\'dropzone\')\n\tdropzone.addEventListener(\'dragover\', handleDragOver, false);\n\tdropzone.addEventListener(\'drop\', handleFileSelect, false); */\n\tcanvas_drop.addEventListener(\'dragover\', handleDragOver, false);\n\tcanvas_drop.addEventListener(\'drop\', handleFileSelect, false);\n\n////Drag and drop logic:\n\tfunction handleFileSelect(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    var files = evt.dataTransfer.files;\n\t    console.log(evt)\n\t    console.log(files)\n\t    preview_stl(files[0])\n\t  }\n\n\t  function handleDragOver(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    evt.dataTransfer.dropEffect = \'copy\';\n\t  }\n\n////jsc3d logic\n\tvar handle_file_select = function(e) {\n\t\te.stopPropagation()\n\t\te.preventDefault()\n\t\tvar f = e.target.files[0]\n\t\tpreview_stl(f)\n\t}\n\n\tfunction preview_stl(f) {\n\t\tvar reader = new FileReader()\n\t\tvar ext = f.name.split(".")[1]\n\n\t\tfunction setup_viewer() {\n\t\t\tviewer.setParameter(\'InitRotationX\', 20);\n\t\t\tviewer.setParameter(\'InitRotationY\', 20);\n\t\t\tviewer.setParameter(\'InitRotationZ\', 0);\n\t\t\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\t\t\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\t\t\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\t\t\tviewer.setParameter(\'RenderMode\', "flat");\n\t\t}\n\t\tsetup_viewer()\n\n\t\treader.onload = (function(file) {\n\t\t\treturn function(e) {\n\t\t\t\ttheScene = new JSC3D.Scene\n\t\t    \tstl_loader = new JSC3D.StlLoader()\n\t\t    \tstl_loader.parseStl(theScene, e.target.result)\n\t\t      \t//viewer.init()\n\t\t      \tviewer.replaceScene(theScene)\n\t\t      \tviewer.update()\n\t\t      \tconsole.log("file reader onload")\n\t\t\t}\n\t\t})(f)\n\n\t\tif (ext.toLowerCase() != "stl") {\n\t\t\talert("That doesn\'t appear to be an STL file.");\n\t\t} else {\n\t\t\treader.readAsBinaryString(f)\n\t\t}\n\t}\n}\n \n \n \n Html\xa0 program \n <html>\n   <head>\n      <meta http-equiv="content-type" content="text/html;charset=utf-8">\n      <title>CMSimfly</title>\n      <link rel="stylesheet" type="text/css" href="/static/cmsimply.css">\n   </head>\n   <body>\n      <div class=\'container\'>\n      <nav>\n         <ul id=\'css3menu1\' class=\'topmenu\'>\n            <li><a href=\'/get_page/簡介\'>簡介</a>\n            <li><a href=\'/get_page/目錄結構\'>目錄結構</a>\n            <li>\n               <a href=\'/get_page/頁面編輯\'>頁面編輯</a>\n               <ul>\n                  <li>\n                     <a href=\'/get_page/插入程式碼\'>插入程式碼</a>\n                     <ul>\n                        <li><a href=\'/get_page/Java 程式碼\'>Java 程式碼</a>\n                        <li><a href=\'/get_page/Python 程式碼\'>Python 程式碼</a>\n                        <li><a href=\'/get_page/C或C++程式碼\'>C或C++程式碼</a>\n                        <li><a href=\'/get_page/Lua 程式碼\'>Lua 程式碼</a>\n                        <li><a href=\'/get_page/Javascript 程式碼\'>Javascript 程式碼</a>\n                        <li><a href=\'/get_page/Html 原始碼\'>Html 原始碼</a></li>\n                        </li>\n                     </ul>\n               </ul>\n            <li><a href=\'/get_page/網際簡報\'>網際簡報</a>\n            <li><a href=\'/get_page/網誌編輯\'>網誌編輯</a>\n            <li><a href=\'/get_page/已知錯誤\'>已知錯誤</a></li>\n         </ul>\n      </nav>\n      <section>\n         <form method=\'post\' action=\'/ssavePage\'>\n         <textarea class=\'simply-editor\' name=\'page_content\' cols=\'50\' rows=\'15\'><h3>Html 原始碼</h3></textarea>\n         <input type=\'hidden\' name=\'page_order\' value=\'9\'>\n         <input type=\'submit\' value=\'save\'>\n         <input type=button onClick="location.href=\'/get_page/Html 原始碼\'" value=\'viewpage\'>\n         </form>\n      </section>\n   </body>\n</html>\nCOPY TO CLIPBOARD\t \n \n', 'tags': '', 'url': 'Insert program.html'}, {'title': 'Internet newsletter', 'text': 'CMSimfly 中採用  Reveal.js  作為網際簡報, 其中的維護檔案位於 config/reveal.js, 而對應的簡報檔案則位於 reveal 目錄中. \n', 'tags': '', 'url': 'Internet newsletter.html'}, {'title': 'Pelican edit', 'text': 'CMSimfly 採用  Pelican blog  系統, 編輯檔案位於 config/pelican.leo, 對應的 \n \xa0Markdown 原始檔案位於 markdown 目錄中, 而經 Pelican 轉換出的網誌超文件檔案則位於 blog 目錄中. \n 其餘在網誌文章中所需要的 Javascript 或 Brython 程式檔案, 則與 CMSimfly 及 Reveal.js 共用, 位於 static 目錄下. \n 上傳檔案與圖檔的引用則與 CMSimfly 架構相同. \n 第二位搶這裡也是不遺餘力 \n \n 就是這樣編輯的 \n 接下來修改這裡 \n \n', 'tags': '', 'url': 'Pelican edit.html'}, {'title': 'Q&A', 'text': 'Q1 全部頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n Q2 頁面標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Q3 Video 引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結. \n Q4 git pull 無法完成程序 \n \n 無解 \n Q5 ungit 無法使用 \n \n \n 必須先到y的home進行user config綁定的更改，這樣才能達到用ungit傳送資料的步驟。 \n Q6 無法開近端動態 \n \n 套件模組沒裝完，須利用指令 pip install 將 flask、bs4、lxml 安裝完成才能開啟近端動態。 \n \n \n', 'tags': '', 'url': 'Q&A.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'Tutorials', 'text': '', 'tags': '', 'url': 'Tutorials.html'}, {'title': 'BubbleRob tutorial', 'text': "\n add a primitive\xa0 sphere \xa0of\xa0 diameter 0.2 \xa0to the scene with [Menu bar --> Add --> Primitive shape --> Sphere]. \n adjust the\xa0 X-size \xa0item to 0.2 \n The created sphere will appear in the\xa0visibility layer\xa01 by default, and be\xa0 dynamic and respondable \n items\xa0 Body is respondable \xa0and\xa0 Body is dynamic \xa0are enabled \n enable\xa0 Collidable ,\xa0 Measurable ,\xa0 Renderable \xa0and\xa0 Detectable \xa0in the\xa0object common properties\xa0for that shape \n \n \n \n and enter 0.02 for\xa0 Along Z . We make sure that the Relative to -item is set to\xa0 World . Then we click\xa0 Translate selection . \n \n \n \n add a proximity sensor \xa0[Menu bar --> Add --> Proximity sensor --> Cone type] \n \n \n \n on the\xa0 orientation \xa0tab, we enter 90 for\xa0 Around Y \xa0and for\xa0 Around Z , then click\xa0 Rotate selection . \n \n \n \n In the\xa0 position dialog , on the\xa0 position tab, we enter 0.1 for\xa0 X-coord. \xa0and 0.12 for\xa0 Z-coord. \n \n \n \n adjust items\xa0 Offset \xa0to 0.005,\xa0 Angle \xa0to 30 and\xa0 Range \xa0to 0.15. Then, in the\xa0 proximity sensor properties , we click\xa0 Show detection parameters . \n \n \n \n uncheck item\xa0 Don't allow detections if distance smaller than \xa0then close that dialog again. \n \n \n \n add a pure primitive cylinder with dimensions (0.08,0.08,0.02). \n \n \n \n set the cylinder's absolute position to (0.05,0.1,0.04) and its absolute orientation to (-90,0,0). \n As for the body of BubbleRob, we enable \xa0 Collidable, Measurable, Renderable and Detectable \xa0 in the object common properties. \n \n \n \n copy and paste the wheel, and set the absolute \xa0 Y \xa0 coordinate of the copy to \xa0 -0.1 . \n \n \n \n add \xa0 joints \xa0 (or motors) for the wheels. Click [Menu bar --> Add --> Joint --> Revolute] \n on the\xa0 position \xa0tab, click the\xa0 Apply to selection\xa0button \n \n \n \n \n \n \n \n click S how dynamic parameters  to open the joint dynamics properties dialog. We enable the motor, and check item  Lock motor when target velocity is zero . \n \n \n \n add a pure primitive sphere with diameter 0.05 and make the sphere  Collidable, Measurable, Renderable and Detectable. (-0.07,0,0) \n add a force sensor object with [Menu bar --> Add --> Force sensor].(-0.07,0,0.05) \n attach the slider to the force sensor \n \n \n \n bubbleRob set the local respondable mask to 11110000 \n \n \n \n bubbleRob_slider set the local respondable mask to 00001111 \n \n \n \n select the two wheels and the slider, and in the shape dynamics dialog we click three times M=M*2 (for selection). \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n", 'tags': '', 'url': 'BubbleRob tutorial.html'}, {'title': 'Experience', 'text': '20190222 week1 \n 20190301 week2 \n 20190308 week3 \n 20190315 week4 \n 20190322 week5 \n 20190329 week6 \n 20190329 week7 \n 20190329 week8 \n 20190329 week9 \n', 'tags': '', 'url': 'Experience.html'}, {'title': '20190222 week1', 'text': '40623201-1 \n 40623204-1 \n 40623217-1 \n 40623223-1 \n 40623229-1 \n 40623232-1 \n 40623242-1 \n 40623243-1 \n 40623244-1 \n 40623248-1 \n 40423220-1 \n', 'tags': '', 'url': '20190222 week1.html'}, {'title': '40623201-1', 'text': '這周是這學期第一次上課，為了補228連假的課而一次上8節課，真的有點吃不消，這周學習到怎麼建立個人可攜倉儲，以前只是用老師幫我們建立好的，所以不知道建立可攜倉儲的步驟那麼的繁瑣，要先下載 \xa0 Python 3.7.2、\xa0 HxD (二位元編輯器) \xa0、\xa0 SciTE (編譯器) \xa0、 KDiff( 用來比較差異性的 ) \xa0、 \xa0 TCC (C 編譯器 ) 等工具，還要更改start.bat 及 stop.bat，最後才能夠完成建立可攜倉儲，過程中在更改pip路徑時，不小心動到二位元資料，而導致路徑錯誤，最後複製其他還沒更改的，重新更改過就成功了。 \n 我將操作步驟整理在 Course content 內的  week1 。 \n', 'tags': '', 'url': '40623201-1.html'}, {'title': '40623204-1', 'text': '這學期第一週，上課學系建立可攜式倉儲，之前都是老師建立好讓大家下載，今天自己親自做一次，才知道有很多繁瑣的步驟，也會遇到很多問題。收先要先下在 python3.7.2 、 hxd 、 scite、 kdiff 、 tcc ，並利用舊的可攜式倉儲的 start.bat 和 stop.bat\xa0 更改內容，這樣才能建立一個可攜式倉儲，國城中我遇到很多問，但都有一一解決，也從中學到很多之前不會的東西。 \n \n', 'tags': '', 'url': '40623204-1.html'}, {'title': '40623217-1', 'text': '心得: \n 這星期為了配合228連假的補課，所以從下午1:20一連貫的上到晚上9:50，雖然這途中有休息，但還是覺得非常的累，這周要做出一個自製的可攜Python系統，這東西除了要到官方的 python3.7.2 下載外，還得載下 SciTe editor 的編譯器，為的是能夠在裡面寫下開啟python系統的編譯程式碼，除此之外要再下載一個 hxd 二維編譯碼，為了要讓執行時可在自己要求的home裡頭執行，最後最重要的是必須了解之前python系統的start、stop批次檔的內容寫的是什麼，光是最後一個就是很煩躁的東西，因為只要弄錯，可能就無法開啟，或是開完後無法關閉，這天光是處理這個就很燒腦了，且還得用global檢查code是否是自己要的，做完後的我只感覺到稍微放鬆，畢竟一件東西最可怕的不是它有多難，而是如何去摸索並得知裏頭的涵義，就算了解了也不會覺得開心，而是一種奇怪的滿足感罷了。 \n 簡易製作過程: https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g5/content/week1.html \n \n \n', 'tags': '', 'url': '40623217-1.html'}, {'title': '40623223-1', 'text': '才剛開學第一周就要連上8堂課，不管是在肉體還是精神都受到折磨，但是為了放假這都是必要的過程，想到這裡原本已經快要消失的意識又被拉了回來，說起來建個隨身系統真是麻煩，弄到一半心思都飄到下禮拜去了，先是下載下來然後改裡面的目錄，然後再砍掉.....重複，還有一些執行檔的程式設定，看到一半就放棄理解直接去複製以前的來改，我只能說，從頭開始真是不容易......最後還是直接下載老師上傳的檔案。 \n 補充一下，雖然有直接抓用好的檔案，但隨身系統什麼的我還是有做完的拉，有沒有作對就不知道就是了 \n', 'tags': '', 'url': '40623223-1.html'}, {'title': '40623229-1', 'text': '第一週直接八節課，從原本的下午一路上到傍晚再從傍晚上到晚上，原本老師還問大家要不要在上第三個禮拜的課，可以再多放一個禮拜，當然是要阿，只可惜最後只上道了10點，主要學習如何自己動手做start以及stop然後了解是如何啟動的，這些東西如果只是看過的話日後一定沒有印象，但是如果自己動手試試看的話會在更了解一點 \n', 'tags': '', 'url': '40623229-1.html'}, {'title': '40623232-1', 'text': '這學期第一週，上課學系建立可攜式倉儲，之前都是老師建立好讓大家下載，今天自己親自做一次，才知道有很多繁瑣的步驟，也會遇到很多問題。首先要先下在 python3.7.2 、 hxd 、 scite、 kdiff 、 tcc ，並利用舊的可攜式倉儲的 start.bat 和 stop.bat\xa0 更改內容，這樣才能建立一個可攜式倉儲，過程中我遇到很多問題，但都有一一的解決，也從中學到很多之前不會的東西，一門學問不能不求甚解，不懂就問，但也不要一開始就問，試著思考問題，才是可以嚷自己成長的推手。 \n', 'tags': '', 'url': '40623232-1.html'}, {'title': '40623242-1', 'text': '這週是這學期第一次上課，為了補228連假的課一次上好上滿8節課，真的有點硬，這周學習到怎麼建立個人可攜倉儲，以前只是用老師幫我們建立好的，所以不知道建立，這次由我自己開始從零到可執行，原來可攜倉儲的步驟那麼的繁瑣，要先下載 \xa0 Python 3.7.2、\xa0 HxD (二位元編輯器)\xa0、\xa0 SciTE (編譯器)\xa0、 KDiff( 用來比較差異性的 ) \xa0、 \xa0 TCC (C 編譯器)等工具，還要更改start.bat 、start_cadlab.bat及 stop.bat，最後才能夠完成建立可攜倉儲，過程中遇到的問題一為在更改pip路徑時，不小心動到二位元資料，而導致路徑錯誤，最後複製其他還沒更改的，重新更改過就成功了，問題二為一直無法認證資料，原本的資料認證位老師的，沒把資料改為自己的，所以怎樣打自己的帳密都無法順利認證登入。 \n 我和組長遇到的問題整理在Q&A還有操作步驟整理在 Course content 內的 \xa0 week1 \n', 'tags': '', 'url': '40623242-1.html'}, {'title': '40623243-1', 'text': '', 'tags': '', 'url': '40623243-1.html'}, {'title': '40623244-1', 'text': '', 'tags': '', 'url': '40623244-1.html'}, {'title': '40623248-1', 'text': '', 'tags': '', 'url': '40623248-1.html'}, {'title': '40423220-1', 'text': '', 'tags': '', 'url': '40423220-1.html'}, {'title': '20190301 week2', 'text': '放假搂～２２８ \n \n', 'tags': '', 'url': '20190301 week2.html'}, {'title': '20190308 week3', 'text': '40623201-3 \n 40623204-3 \n 40623217-3 \n 40623223-3 \n 40623229-3 \n 40623232-3 \n 40623242-3 \n 40623243-3 \n 40623244-3 \n 40623248-3 \n 40423220-3 \n', 'tags': '', 'url': '20190308 week3.html'}, {'title': '40623201-3', 'text': '', 'tags': '', 'url': '40623201-3.html'}, {'title': '40623204-3', 'text': '', 'tags': '', 'url': '40623204-3.html'}, {'title': '40623217-3', 'text': '\n 上課內容: \n 手做簡報: https://mdekmol.github.io/cd2019b-task1-2019cdb_t1_g5/content/week3.html \n 心得: \n 經過這星期的ungit教學，讓我發現到這東西的存在可以很簡單的進行傳送資料到倉儲外，還能讓自己去確定之前的版本是否可以取得，能夠在需要的時候回到當初的事物狀況加以編輯，且可以透過這樣的方式，知道曾經做過哪些歷程，能過一目瞭然 ，算是目前讓我覺得非常方便的操作 。 \n', 'tags': '', 'url': '40623217-3.html'}, {'title': '40623223-3', 'text': '', 'tags': '', 'url': '40623223-3.html'}, {'title': '40623229-3', 'text': '', 'tags': '', 'url': '40623229-3.html'}, {'title': '40623232-3', 'text': 'ungit 進行檔案推送及版本的推還確認，綁定 config，到python wsgi.py動態網站更改部分的資料 ，接著開啟ungit後進行commit上傳，到warehousing尋找commit recond，介紹如何使用ungit。 \n', 'tags': '', 'url': '40623232-3.html'}, {'title': '40623242-3', 'text': '這週教了一個新的東西叫ungit，原來這東西就是我們之前所有的推送過程的圖解版，不只讓我發現到這東西的存在可以很簡單的進行傳送資料到倉儲外，還能讓自己去確定之前的版本是否有任何小東西被合併可以透過樹狀圖來得知，能夠在需要的時候回到當初的事物狀況加以編輯，且可以透過這樣的方式，就不一定要開到Github.com的commit查看知道曾經做過哪些歷程，能過一目瞭然 ，讓我覺得非常乾淨方便的系統 。 \n', 'tags': '', 'url': '40623242-3.html'}, {'title': '40623243-3', 'text': '', 'tags': '', 'url': '40623243-3.html'}, {'title': '40623244-3', 'text': '', 'tags': '', 'url': '40623244-3.html'}, {'title': '40623248-3', 'text': '', 'tags': '', 'url': '40623248-3.html'}, {'title': '40423220-3', 'text': '', 'tags': '', 'url': '40423220-3.html'}, {'title': '20190315 week4', 'text': '40623201-4 \n 40623204-4 \n 40623217-4 \n 40623223-4 \n 40623229-4 \n 40623232-4 \n 40623242-4 \n 40623243-4 \n 40623244-4 \n 40623248-4 \n 40423220-4 \n', 'tags': '', 'url': '20190315 week4.html'}, {'title': '40623201-4', 'text': '', 'tags': '', 'url': '40623201-4.html'}, {'title': '40623204-4', 'text': '', 'tags': '', 'url': '40623204-4.html'}, {'title': '40623217-4', 'text': '這周開始分組進行討論，從這周開始到學期中必須要做出立體模擬手控足球台，在我看來，除了繪圖、vrep、網站維護、報告、翻譯電子書摘要，目前我只能想到這些能執行的任務，可是以一個組來說，真正的做到的是每個人都必須找到自己能做到的，因為這不只是分數這麼簡單，更主要的是必須明白自己是否有學習並得知當前該有的以及自身不足的，不管人到那裡總能遇到比自己強的人，可以我的觀點這是給自己的警惕，假設自己不求目標的努力或是漫無目的，那只是行屍走肉。 \n', 'tags': '', 'url': '40623217-4.html'}, {'title': '40623223-4', 'text': '', 'tags': '', 'url': '40623223-4.html'}, {'title': '40623229-4', 'text': '', 'tags': '', 'url': '40623229-4.html'}, {'title': '40623232-4', 'text': '開始分組 ~ ，分好組討論，並分配任務執行，還有互評機制，防止不做事的人偷懶躺分 \n', 'tags': '', 'url': '40623232-4.html'}, {'title': '40623242-4', 'text': '這週開始分組進行討論，從現在開始到學期中必須要做出立體模擬手控足球台，在看完老師的解釋，不只單純的繪圖、網站維護、報告、翻譯電子書摘要，最重要的是V-rep想到這些執行的任務就覺得頭痛，可是以一個組來說，每個人都必須了解自己能做的有甚麼，更重要的是每個人都必須長是新的東西，因為這不只是分數這麼簡單，更主要的是必須明白自己是否有學習到該學的東西，並了解當前自身不足的地方，不管人到那裡總能遇到有其他領域比我強的人，但我也不是省油的燈，這是給自己繼續學習的動力，假設自己不求目標或是漫無目的過一天是一天，那只是無意義的過。 \n', 'tags': '', 'url': '40623242-4.html'}, {'title': '40623243-4', 'text': '', 'tags': '', 'url': '40623243-4.html'}, {'title': '40623244-4', 'text': '', 'tags': '', 'url': '40623244-4.html'}, {'title': '40623248-4', 'text': '', 'tags': '', 'url': '40623248-4.html'}, {'title': '40423220-4', 'text': '', 'tags': '', 'url': '40423220-4.html'}, {'title': '20190322 week5', 'text': '40623201-5 \n 40623204-5 \n 40623217-5 \n 40623223-5 \n 40623229-5 \n 40623232-5 \n 40623242-5 \n 40623243-5 \n 40623244-5 \n 40623248-5 \n 40423220-5 \n', 'tags': '', 'url': '20190322 week5.html'}, {'title': '40623201-5', 'text': '', 'tags': '', 'url': '40623201-5.html'}, {'title': '40623204-5', 'text': '繪製實驗任務二的圖 \n \n \n \n \n 心得:這週我們這組分配工作，我負責畫圖，這週我第一次嘗試用 Onshape 做組合圖，中間有很多都是其他組員跟我說要怎麼做的，所依我學到很多之前不知道的指令。上課前我還沒 clone 我們這組的倉儲，其他組員發現我有東西沒有下在，所以告訴我要怎麼用，要下載甚麼，也知道了可攜式倉儲有很多東西是我不知道的，要多多上網找資料跟好好學習。 \n', 'tags': '', 'url': '40623204-5.html'}, {'title': '40623217-5', 'text': '這星期我開始碰vrep的軟體，使用起來相當的難，這也許是我沒碰過，所以覺得很難，但萬事起頭難這句話也不是錯的，月是沒接觸過的東西，代表這有著自己某方面的必要知識，所以我仍然會去摸索各別各樣的事物，最重要的是別讓自己太過懶散，導致時間的浪費，就算只是件小事也必然有它的意義，vrep雖然現在對我很難，但只要我花時間看好英文，了解內部的資訊，我想應該能有一點點小成就也說不定。 \n \n', 'tags': '', 'url': '40623217-5.html'}, {'title': '40623223-5', 'text': '', 'tags': '', 'url': '40623223-5.html'}, {'title': '40623229-5', 'text': '', 'tags': '', 'url': '40623229-5.html'}, {'title': '40623232-5', 'text': '分組討論，自評，做了什麼附上佐證，很棒的機制 \n', 'tags': '', 'url': '40623232-5.html'}, {'title': '40623242-5', 'text': '這週我們這組分配工作，我和組長負責網頁管理，才剛開始這週我才第一次嘗試用自己用的可攜程式來重新整理網站，直接爆炸，一直跑出404，看了看找不出原因，但用之前的版本來更新，卻又OK，我從頭開始檢查我的可攜程式，發現到start.bat中有一行直接省略加上少一個點，改完之後就OK了，用程式就是必需要專注一點，若少了一點東西，就會導致程式整個大崩壞，每次都要重頭還真的有點頭疼。 \n', 'tags': '', 'url': '40623242-5.html'}, {'title': '40623243-5', 'text': '', 'tags': '', 'url': '40623243-5.html'}, {'title': '40623244-5', 'text': '整堂課都在研究bubbleRob tutorial，從第一步在V-rep增加物件，在物件上加上感測器，配置傳動軸，使其物體能運動，由時間不足，在最重要的地方尚未著手進行，不過在過程中，慢慢習慣看原文的文章，漸漸地熟悉V-rep，去做出一個bubbleRob。 \n', 'tags': '', 'url': '40623244-5.html'}, {'title': '40623248-5', 'text': '', 'tags': '', 'url': '40623248-5.html'}, {'title': '40423220-5', 'text': '', 'tags': '', 'url': '40423220-5.html'}, {'title': '20190329 week6', 'text': '40623201-6 \n 40623204-6 \n 40623217-6 \n 40623223-6 \n 40623229-6 \n 40623232-6 \n 40623242-6 \n 40623243-6 \n 40623244-6 \n 40623248-6 \n 40423220-6 \n', 'tags': '', 'url': '20190329 week6.html'}, {'title': '40623201-6', 'text': '這周在進行 bobbleRob 的 V-rep 模擬，一開始對軟體不熟悉，加上又都是英文的，在操作上有許多的問題，但多試幾次後有比較好一點，在英文閱讀上也增加了許多耐心，遇到不會的單字以及操作上的問題，也能慢慢去克服了。過程中容易有步驟做錯就發生問題，要很詳細的去檢查是否哪裡出問題，真的要花費一些時間。 \n', 'tags': '', 'url': '40623201-6.html'}, {'title': '40623204-6', 'text': '心得:這週因為該畫的圖都畫完了，所依我跟著大家練習模擬 v-rep ，上學期並沒有實際操作過，所以並不會打開，也是其他組員教我我才會的，後來看著老師給的資料慢慢做，但因為是英文，所以花了不少時間翻譯單字，下週會多花一些時間慢慢跟上大家的腳步，成功模擬出來。', 'tags': '', 'url': '40623204-6.html'}, {'title': '40623217-6', 'text': '這星期我開始觸碰關於vrep的相關內容，雖目前分工並非確定，可是我基本能碰什麼就盡量學習什麼，在我剛碰沒多久，一看見一堆自己根本沒見過的東西，老實說我其實很膽怯，因為看見這些後，並沒有什麼操作的實際感，或許是全都英文的關西，但是再困難的東西給我，我都得要去認得並摸索，目的只是想著如果自己不學這東西是可以，可是只是以自己的時間和自身的精力來衡量，不去學習實在是不行，現在我只知道這軟體能過透過呼叫系統內部的部件來進行組合做出簡易的構想藍圖，但我覺得當從其他繪圖軟體匯入vrep時，部分的構件也得想辦法做更改或是使物體至少偏差不可過大(前提是必須符合物理定義上的運動)，我也想過是否可以讓手足上的人偶能在前1秒預測球的運動方向，如果可以那肯定很難進龍門也說不定。 \n 步驟連結: http://www.coppeliarobotics.com/helpFiles/en/bubbleRobTutorial.htm \n 手作影片 https://www.youtube.com/watch?v=4M96bKCxg6o&feature=youtu.be \n \n', 'tags': '', 'url': '40623217-6.html'}, {'title': '40623223-6', 'text': '這周依然沒有明確的工作，所以還是在練習V-rep，跟上周比起來進步了很多，原本連軸都搞不懂要怎麼用，現在已經可以讓它前進而不會隨便亂飛；這都是教學手冊的功勞，雖然英文還是有些吃力，但一步一步跟著慢慢來還是做得到的 \n 不過現在卡在如下圖的一個地方，有點搞不懂它的意思 \n \n 這個禮拜的練習結果，已經可以跑了，但感測器和數值圖表還沒設定 \n', 'tags': '', 'url': '40623223-6.html'}, {'title': '40623229-6', 'text': '', 'tags': '', 'url': '40623229-6.html'}, {'title': '40623232-6', 'text': '', 'tags': '', 'url': '40623232-6.html'}, {'title': '40623242-6', 'text': '上週因為網站問題導致我進度落後，上週大家都開始在研究bubbleRob，但這週我才開始準備進行 bobbleRob 的 V-rep 模擬，一開始對軟體不熟悉，加上又都是英文的，在操作上有許多的問題，好加在其他同學們已經有點頭敘了，幫了我許多，多試幾次後有比較好一點，在英文閱讀上也增加了許多能力及單字庫，遇到不會的單字以及操作上的問題，也能慢慢去克服了。過程中容易有步驟做錯就發生問題，要很詳細的去檢查上一步是否哪裡出問題或是哪裡沒設定好，真的要花點耐心和許多 時間，還在研究模擬跑動，問題還很多需要多點時間研究。 \n', 'tags': '', 'url': '40623242-6.html'}, {'title': '40623243-6', 'text': '', 'tags': '', 'url': '40623243-6.html'}, {'title': '40623244-6', 'text': '這週一樣繼續做bubbleRob，雖然上一週的進度比較多，但是這週卻一直卡在程式模擬上，首次模擬時，當物件在移動時，sensor一直沒有反應，最後發現sensor沒有調整好，才會沒有反應，第二次原因在於物件上的視角無法出現在view sensor上，經過和同學的討論，完成了bubbleRob。雖然只是一直照著步驟做，但是自己一個人做，有一些細節會沒有注意到，但是多人一起討論，可以彌補這些細節。 \n', 'tags': '', 'url': '40623244-6.html'}, {'title': '40623248-6', 'text': '', 'tags': '', 'url': '40623248-6.html'}, {'title': '40423220-6', 'text': '', 'tags': '', 'url': '40423220-6.html'}, {'title': '20190405 week7', 'text': '40623201-7 \n 40623204-7 \n 40623217-7 \n 40623223-7 \n 40623229-7 \n 40623232-7 \n 40623242-7 \n 40623243-7 \n 40623244-7 \n 40623248-7 \n 40423220-7 \n', 'tags': '', 'url': '20190405 week7.html'}, {'title': '40623201-7', 'text': '', 'tags': '', 'url': '40623201-7.html'}, {'title': '40623204-7', 'text': '', 'tags': '', 'url': '40623204-7.html'}, {'title': '40623217-7', 'text': '', 'tags': '', 'url': '40623217-7.html'}, {'title': '40623223-7', 'text': '', 'tags': '', 'url': '40623223-7.html'}, {'title': '40623229-7', 'text': '', 'tags': '', 'url': '40623229-7.html'}, {'title': '40623232-7', 'text': '', 'tags': '', 'url': '40623232-7.html'}, {'title': '40623242-7', 'text': '', 'tags': '', 'url': '40623242-7.html'}, {'title': '40623243-7', 'text': '', 'tags': '', 'url': '40623243-7.html'}, {'title': '40623244-7', 'text': '', 'tags': '', 'url': '40623244-7.html'}, {'title': '40623248-7', 'text': '', 'tags': '', 'url': '40623248-7.html'}, {'title': '40423220-7', 'text': '', 'tags': '', 'url': '40423220-7.html'}, {'title': '20190412 week8', 'text': '40623201-8 \n 40623204-8 \n 40623217-8 \n 40623223-8 \n 40623229-8 \n 40623232-8 \n 40623242-8 \n 40623243-8 \n 40623244-8 \n 40623248-8 \n 40423220-8 \n', 'tags': '', 'url': '20190412 week8.html'}, {'title': '40623201-8', 'text': '', 'tags': '', 'url': '40623201-8.html'}, {'title': '40623204-8', 'text': '', 'tags': '', 'url': '40623204-8.html'}, {'title': '40623217-8', 'text': '', 'tags': '', 'url': '40623217-8.html'}, {'title': '40623223-8', 'text': '', 'tags': '', 'url': '40623223-8.html'}, {'title': '40623229-8', 'text': '', 'tags': '', 'url': '40623229-8.html'}, {'title': '40623232-8', 'text': '', 'tags': '', 'url': '40623232-8.html'}, {'title': '40623242-8', 'text': '', 'tags': '', 'url': '40623242-8.html'}, {'title': '40623243-8', 'text': '', 'tags': '', 'url': '40623243-8.html'}, {'title': '40623244-8', 'text': '', 'tags': '', 'url': '40623244-8.html'}, {'title': '40623248-8', 'text': '', 'tags': '', 'url': '40623248-8.html'}, {'title': '40423220-8', 'text': '', 'tags': '', 'url': '40423220-8.html'}, {'title': '20190419 week9', 'text': '40623201-9 \n 40623204-9 \n 40623217-9 \n 40623223-9 \n 40623229-9 \n 40623232-9 \n 40623242-9 \n 40623243-9 \n 40623244-9 \n 40623248-9 \n 40423220-9 \n', 'tags': '', 'url': '20190419 week9.html'}, {'title': '40623201-9', 'text': '', 'tags': '', 'url': '40623201-9.html'}, {'title': '40623204-9', 'text': '', 'tags': '', 'url': '40623204-9.html'}, {'title': '40623217-9', 'text': '', 'tags': '', 'url': '40623217-9.html'}, {'title': '40623223-9', 'text': '', 'tags': '', 'url': '40623223-9.html'}, {'title': '40623229-9', 'text': '', 'tags': '', 'url': '40623229-9.html'}, {'title': '40623232-9', 'text': '', 'tags': '', 'url': '40623232-9.html'}, {'title': '40623242-9', 'text': '', 'tags': '', 'url': '40623242-9.html'}, {'title': '40623243-9', 'text': '', 'tags': '', 'url': '40623243-9.html'}, {'title': '40623244-9', 'text': '', 'tags': '', 'url': '40623244-9.html'}, {'title': '40623248-9', 'text': '', 'tags': '', 'url': '40623248-9.html'}, {'title': '40423220-9', 'text': '', 'tags': '', 'url': '40423220-9.html'}]};