const {ethers } = require("hardhat");

(async () =>  {
  const { deploy } = deployments

	let accounts = await ethers.getSigners();
	console.log(accounts[0].address)
	let lssContract = await ethers.getContract("LostSoulsSanctuary",accounts[0])
	let gasRes = await ethers.provider.getGasPrice();
	let nonce = await ethers.provider.getTransactionCount(accounts[0].address)
	console.log(ethers.utils.parseUnits("0.03",18).toString())
	const tx = {
		'value':ethers.utils.parseUnits("0.6",'ether')
	};
	await lssContract.saveLostSoul(20, tx);
	let res = await lssContract.walletOfOwner(accounts[0].address);
	console.log(res)



})();