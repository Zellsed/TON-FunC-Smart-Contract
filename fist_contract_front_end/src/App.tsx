import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  const {
    contract_address,
    counter_value,
    recent_sender,
    owner_address,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawRequest,
  } = useMainContract();

  const { connected } = useTonConnect();

  return (
    <>
      <div className="BT">
        <TonConnectButton />
      </div>
      <div className="Text">
        <br />
        <div className="Card">
          <b className="text">Our contract Address</b>
          <div className="Hint">{contract_address}</div>
          <b className="text">Our contract balance</b>
          {contract_balance && <div className="Hint">{contract_balance}</div>}
        </div>

        <div className="Card">
          <b className="text">Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>

        <br />

        <button className="button">
          {connected && (
            <a
              onClick={() => {
                sendIncrement();
              }}
            >
              Increment by 5
            </a>
          )}
        </button>

        <br />
        <br />

        <button className="button">
          {connected && (
            <a
              onClick={() => {
                sendDeposit();
              }}
            >
              Request deposit of 1 TON
            </a>
          )}
        </button>

        <br />
        <br />

        <button className="button">
          {connected && (
            <a
              onClick={() => {
                sendWithdrawRequest();
              }}
            >
              Request 0.7 TON withdrawal
            </a>
          )}
        </button>
      </div>
    </>
  );
}

export default App;
