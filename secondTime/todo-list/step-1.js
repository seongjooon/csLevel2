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

const todo = {
    list: [
        { name: "훈련", tag: "training", id: 1, status: "done" },
        { name: "등산", tag: "climing", id: 2, status: "done" },
        { name: "iOS공부하기", tag: "iOS studying", id: 3, status: "doing" },
    ],
    add(i) {
        i.id = this.list.length + 1;
        i.status = "todo";
        this.list.push(i);
        return `id: ${i.tag}, "${i.name}" 항목이 새로 추가됐습니다.`
    },
    update(j) {
        const selectObj = todo.list[j.id - 1]
        const lowerStatus = j.nextstatus.toLowerCase()
        if (selectObj.id === j.id) {
            if (lowerStatus === "todo") selectObj.status = lowerStatus
            if (lowerStatus === "doing") selectObj.status = lowerStatus
            if (lowerStatus === "done") selectObj.status = lowerStatus
        }
        return `id: ${selectObj.id}, ${selectObj.name} 항목이 ${selectObj.status} => ${lowerStatus} 상태로 업데이트 됐습니다.\n
                현재상태 : todo: ${todo.list.filter(s => s.status == "todo").length}개, doing: ${todo.list.filter(s => s.status == "doing").length}개, done: ${todo.list.filter(s => s.status == "done").length}개`
    }
}
//////
console.log(todo.list)
//add
console.log(todo.add({ name: "자바스크립트 공부하기", tag: "programming" }))
//update
console.log(todo.update({ id: 4, nextstatus: "doNe" }))

console.log(todo.list.filter(s => s.status == "done"))
