const url = "https://hooks.slack.com/services/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";

document.addEventListener("DOMContentLoaded", ()=>{
	const button = document.getElementById("submit-button")
	const submissionPage = document.getElementById("submission");
	const resultPage = document.getElementById("result");
	const getRoom = () => document.getElementById("room-input").value;
	const getProblem = () => document.getElementById("problem-input").value;

	button.addEventListener("click", ()=>{
		const body = {
			mrkdwn:false, // stop injection attacks
			text:`Someone in room ${getRoom()} needs help with ${getProblem()}!`,
			username:"MKA Help Button",
		}

		var xhr = new XMLHttpRequest();
		xhr.open("POST", `${url}?payload=${encodeURIComponent(JSON.stringify(body))}`);
		xhr.send(JSON.stringify(body));

		resultPage.classList.remove("hidden");
		submissionPage.classList.add("hidden");
	})
})
