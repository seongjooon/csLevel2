/*
요구사항
다양한 출력을 지원한다. (모든태그, 특정태그, 모든리스트, 특정상태리스트)
doing 에서 done으로 갈때는 소요시간이 출력되도록 doing상태부터 시간정보가 있어야 한다.
showAll메서드는 모든리스트를 출력하며, 2초-> 3초 ->2초로 출력된다. (총7초 소요)
개발과정에서 본인이 판단해서, 별도의 객체를 분리해야 할 것이면 그렇게 시도한다.

> todo.showTags();  // 태그가 있는 모든 task 출력
[ programming , 총2개 ]
- 13번, 자바스크립트공부, [todo]
- 17번, iOS공부, [doing]

[ play , 총1개 ]
- 18번, 여행가기, [doing]

> todo.show(" Doing ");   //  'todo', 'done'도 역시 같은형태로 결과 출력되어야 함.
- 13번, 자바스크립트공부, [programming]
- 17번, iOS공부, [programming]
- 18번, 여행가기, [play]

> todo.show("done");  //done항목을 노출할때는,  doing-> done까지 소요된 시간이 출력된다.
- 20번, 휴대폰수리, [other], 1시간1분
- 21번, closure공부, [programming], 1일 23분

>  todo.showAll();   //  모든 리스트를 지연출력.  'todo', 'done'도 역시 아래와 같은 형태와 방식으로 출력되어야 함.
"총 7개의 리스트를 가져왔습니다. 2초뒤에 todo내역을 출력합니다....."
[ todo , 총3개 ]
- 13번, 자바스크립트공부, [programming]
- 17번, iOS공부, [programming]
- 18번, 여행가기, [play]

"지금부터 3초뒤에 doing내역을 출력합니다...."
[ doing , 총2개 ]
- 14번, 블로그쓰기, [other]
- 10번, 알고리즘공부

"지금부터 2초뒤에 done내역을 출력합니다....."
[ done , 총2개 ]
- 20번, 휴대폰수리, [other], 1시간1분
- 21번, closure공부, [programming], 1일 23분

> todo.showTag('programming');  // programming 태그와 일치하는  task 출력
[ todo , 총2개 ]
- 13번, 자바스크립트공부
- 17번, iOS공부

[ done , 총1개 ]
- 21번, closure공부 1일 23분
*/

const todoList = {
    list: [
        { name: "훈련", tag: "training", id: 1, status: "done" },
        { name: "등산", tag: "climing", id: 2, status: "done" },
        { name: "자바스크립트공부", tag: "programming", id: 13, status: "todo" },
        { name: "iOS공부하기", tag: "programming", id: 17, status: "todo" },
        { name: "closure공부", tag: "programming", id: 21, status: "done" }
    ]
}

const util = {
    getTask: (task, key) => todoList.list.filter(listArr => listArr.key == task).length
}

const todoCrud = {
    showTag: (tag) => {

    },

    add: (addTask) => {
        const plusIdNumber = 1;
        const lastTaskId = [...todoList.list].pop().id + plusIdNumber
        const newList = [...todoList.list, { name: addTask.name, tag: addTask.tag, id: lastTaskId, status: "todo" }]
        todoList.list = newList
        return `id: ${lastTaskId}, "${addTask.name}" 항목이 새로 추가됐습니다.`
    },

    update: (status) => {
        const [selectedObj] = [...todoList.list].filter(listArr => listArr.id == status.id)
        const lowerStatus = status.nextstatus.toLowerCase()
        if (selectedObj.id === status.id) {
            selectedObj.status = lowerStatus
            return `id: ${selectedObj.id}, ${selectedObj.name} 항목이 ${selectedObj.status} => ${lowerStatus} 상태로 업데이트 됐습니다.\n
            현재상태 : todo: ${util.getTask('todo', selectedObj.status)}개, doing: ${util.getTask('doing', selectedObj.status)}개, done: ${util.getTask('done', selectedObj.status)}개`
        }
    },

    remove: (task) => {
        const [deleteArr] = [...todoList.list].filter(listArr => listArr.id == task.id)
        todoList.list.splice(task.id - 1, 1)
        return `id:${task.id}, ${deleteArr.name} 삭제완료`
    }
}

console.log(todoList.list)

console.log(todoCrud.showTag('programming'))

console.log(todoList.list)