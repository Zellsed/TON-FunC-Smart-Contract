import { address, toNano } from "ton-core";
import { MainContract } from "../wrappers/MainContract";
import { compile, NetworkProvider } from "@ton-community/blueprint";

export async function run(provider: NetworkProvider) {
  const codeCell = await compile("MainContract");

  const myContract = MainContract.createFromConfig(
    {
      number: 0,
      address: address("0QALzUOdlNz4w3Nq1bctEFhxeuVZRBTE7xuSLDRJl2ox9CRH"),
      owner_address: address(
        "0QALzUOdlNz4w3Nq1bctEFhxeuVZRBTE7xuSLDRJl2ox9CRH"
      ),
    },
    codeCell
  );

  const openContract = provider.open(myContract);

  openContract.sendDeploy(provider.sender(), toNano("0.05"));

  await provider.waitForDeploy(myContract.address);
}
