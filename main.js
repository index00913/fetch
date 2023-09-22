/*
  promise 객체
  객체에 담겨있는 데이터의 상태값을 가지고 있는
  pending: 대기
  fullfiled: 성공적으로 작업의 수행이 완료된 상태
  rejected: 작업의 요청이 거절된 상태

  작업시간이 어래걸리는 업무를 수행할때 프로미스로 반환하면
  해당 작업 완료이후 동기적으로 다음 작업을 선형화해서 수행 (es6)
*/
const section = document.querySelector('section');

fetch('DB/department.json')
	.then((data) => {
		//첫번째 then구문에 받아진 promise를 다시 바로 리턴하면
		//두번째 then구문에서 해당 데이터를 동기적으로 활용가능
		return data.json();
	})
	.then((json) => {
		console.log(json.members);
		let tags = '';
		json.members.map((data) => {
			tage += `
        <article>
          <div class='pic>
            <img src='img/${data.pic}' >
          </div>
        </article>
      `;
		});

		section.innerHTML = tags;
	})
	.catch((err) => {
		console.log(err);
	});
