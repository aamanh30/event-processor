export const studentId = `be2950d6-cbf3-42aa-b7a1-694e6056400d`;

export const classId = `2b518a54-64c1-4f22-8497-ef25b2546845`;

export const productIsbn = `9753220091`;

export const sessionId = `b30283a6`;

export const classList = [
    {
		"id": "1e16a565-a949-4d65-b41b-4250007e3363",
		"name": "vijay 23 march test morning",
	},
	{
		"id": "00bc50f9-f5fc-4f8c-91fc-424f00755ed8",
		"name": "Dev test - dashboard pbi - 001",
	},
	{
		"id": "4a9906da-0303-42cd-8c81-424e00edae17",
		"name": "test etl internal demo 22mar2021",
	},
	{
		"id": "3dc71eb7-f062-4d9e-bc0c-424e00bb3e29",
		"name": "TestMarchNew22",
	}
];

export const getEventTimestamp = (): string => {
	const today = new Date();

	const year = `${today.getFullYear()}`;
	const month = `${today.getMonth() < 9 ? `0` : ``}${today.getMonth() + 1}`;
	const date = `${today.getDate() < 10 ? `0` : ``}${today.getDate()}`; 
	const hours = `${today.getHours() < 10 ? `0` : ``}${today.getHours()}`;
	const minutes = `${today.getMinutes() < 10 ? `0` : ``}${today.getMinutes()}`;
	const seconds = `${today.getSeconds() < 10 ? `0` : ``}${today.getSeconds()}`;

	return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
};