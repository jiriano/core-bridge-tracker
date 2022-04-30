import {log, BigInt, Bytes} from "@graphprotocol/graph-ts"
import {
  CoreBridge, LogMessagePublished,
} from "../generated/CoreBridge/CoreBridge"
import {Record} from "../generated/schema";

export function handleLogMessagePublished(event: LogMessagePublished): void {
  const isForMayan = event.params.sender.toHexString().toLowerCase() == '0x890f1e711f0edf9c9879cb3bb3465782608686ae'
  if(!isForMayan) {
    return;
  }
  const id = event.transaction.hash.toHexString();
  let entity = Record.load(id);
  if(!entity) {
    entity = new Record(id);
  }
  entity.timestamp = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.swapSequence = event.params.sequence;
  entity.transactionHash = event.transaction.hash;
  const transferSeq = Bytes.fromUint8Array(event.params.payload.slice(261, 269));
  const transferSeqBE = Bytes.fromUint8Array(transferSeq.reverse());
  const transferSeqNumber = BigInt.fromUnsignedBytes(transferSeqBE);
  entity.transferSequence = transferSeqNumber;
  entity.save();
}

