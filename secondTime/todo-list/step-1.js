/*
- 기능요구사항
새로운 task를 추가할 수 있음
태그(tag)를 옵션으로 추가할 수 있음
모든 task는 id를 가짐
todo/doing/done 상태를 가짐(add시에는 todo)
상태변경을 할 수 있음

- code 구현형태
코드의 형태는 객체리터럴 형태로 구현한다.

-동작형태 
> todo.add({name: "자바스크립트 공부하기", tag:"programming"});  // 태그를 입력받는다.
id: 5,  "자바스크립트 공부하기" 항목이 새로 추가됐습니다. 
현재상태 :  todo:1개, doing:2개, done:2개

> todo.update({id:4,  nextstatus:"doNe"});  //대소문자 모두 잘 된다.
id: 4,  "자바스크립트 공부하기" 항목이 todo => done 상태로 업데이트 됐습니다.
현재상태 :  todo:1개, doing:1개, done:4개 

> todo.remove({id:3});
id:3, iOS공부하기 삭제완료.
*/

const todoList = {
    list: [
        { name: "훈련", tag: "training", id: 1, status: "done" },
        { name: "등산", tag: "climing", id: 2, status: "done" },
        { name: "iOS공부하기", tag: "programming", id: 3, status: "doing" },
    ]
}

const util = {
    getTask: (task) => todoList.list.filter(listArr => listArr.status == task).length
}

const todoCrud = {
    add: (addTask) => {
        const asdf = 1;
        const lastTaskId = [...todoList.list].pop().id + asdf
        const newList = [...todoList.list, { name: addTask.name, tag: addTask.tag, id: lastTaskId, status: "todo" }]
        todoList.list = newList
        return `id: ${lastTaskId}, "${addTask.name}" 항목이 새로 추가됐습니다.`
    },
    update: (task) => {
        const [selectedObj] = [...todoList.list].filter(listArr => listArr.id == task.id)
        const lowerStatus = task.nextstatus.toLowerCase()
        if (selectedObj.id === task.id) {
            selectedObj.status = lowerStatus
            return `id: ${selectedObj.id}, ${selectedObj.name} 항목이 ${selectedObj.status} => ${lowerStatus} 상태로 업데이트 됐습니다.\n
            현재상태 : todo: ${util.getTask('todo')}개, doing: ${util.getTask('doing')}개, done: ${util.getTask('done')}개`
        }
    },
    remove: (task) => {
        const [deleteArr] = [...todoList.list].filter(listArr => listArr.id == task.id)
        todoList.list.splice(task.id - 1, 1)
        return `id:${task.id}, ${deleteArr.name} 삭제완료`
    }
}

console.log(todoList.list)

console.log(todoCrud.add({ name: "자바스크립트 공부하기", tag: "programming" }))

console.log(todoCrud.update({ id: 4, nextstatus: "doNe" }))

console.log(todoList.list)
console.log(todoCrud.remove({ id: 3 }))
