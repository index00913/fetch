/*
  premis 객체
  객체에 담겨있는 데이터의 상태값을 가지고 있는
  pending : 대기
  fullfiled : 성공적으로 작업의 수행이 완료된 상태
  rejected : 잡업의 요청이 거절된 상태

  작업시간이 오래걸리는 업무를 수행할때 프로미스로 반환하면
  해당 작업완료이후 동기적으로 다음 작업을 선형화 해서 수행 (es6)


  fetch('DB/department.json2')
    .then((data) => {
      //이전 메서드에 반환된 프로미스가 fullfiled 상태일때 실행
      console.log(data); // json형태로 parsing되지 않은 raw data
      const result = data.json(); //json형태로 변환시 promise로 반환
      result.then((json) => {
        console.log(result); //json로 반환된 데이터를 then으로 확인
      });
    })

    .catch((err) => {
      //이전 메서드에서 반환된 프로미스가 rejected상태 일때 실행
      //오류가 발생했을때 runtime에러가 발생하지 않도록 예외사항을 준비
      console.log(err);
    });
  */

const section = document.querySelector('section');

fetch('DB/department.json')
	.then((data) => data.json())
	.then((json) => {
		let tags = '';
		json.members.map((data) => {
			tags += `
          <article>
          <div class="pic">
            <img src="img/${data.pic}">
          </div>
          <h2>${data.name}</h2>
          <p>${data.position}</p>
        </article>
          `;
		});

		section.innerHTML = tags;
	})

	.catch((err) => {
		console.log(err);
	});
