google-translate-ci
===================

Google Translate command line tool, and can speak the word out also(only work on Mac now).

install
======
```
$ npm install gtrs -g
```

changelog
=========

* 0.0.8 add cache for audio files, in ~/.gwords, as mp3 format
* 0.1.0 add User-Agent and Referer for request
* 0.4.0 remove gtrg, fix gtrs

usage
====

### gtrs

en -> zh
```
$ gtrs program
```

```
program: 程序 Chéngxù

名词: 程序,方案,计划,节目,规划,日程,议程,应用程式,秩序册
程序: program,procedure,sequence,order,course
方案: program,scheme,plan,proposal,formula,suggestion
计划: plan,program,project,projet
节目: program,show,item
规划: planning,plan,program
日程: schedule,program,itinerary
议程: program,schedule,plan,agendum,outline,schema
应用程式: application,program
秩序册: program

动词: 编程
编程: program
```

zh -> en
```
$ gtrs 程序
```

```
程序: Program

名词: program,procedure,sequence,order,course
program: 程序,方案,计划,节目,规划,日程
procedure: 程序,过程,步骤,手续,规程
sequence: 序列,顺序,序,次序,程序,排序
order: 顺序,命令,秩序,令,次序,程序
course: 课程,过程,进程,历程,期间,程序

形容词: procedural,programmed
procedural: 程序
programmed: 程序
```
