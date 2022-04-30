// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ContractUpgraded extends ethereum.Event {
  get params(): ContractUpgraded__Params {
    return new ContractUpgraded__Params(this);
  }
}

export class ContractUpgraded__Params {
  _event: ContractUpgraded;

  constructor(event: ContractUpgraded) {
    this._event = event;
  }

  get oldContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class GuardianSetAdded extends ethereum.Event {
  get params(): GuardianSetAdded__Params {
    return new GuardianSetAdded__Params(this);
  }
}

export class GuardianSetAdded__Params {
  _event: GuardianSetAdded;

  constructor(event: GuardianSetAdded) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LogMessagePublished extends ethereum.Event {
  get params(): LogMessagePublished__Params {
    return new LogMessagePublished__Params(this);
  }
}

export class LogMessagePublished__Params {
  _event: LogMessagePublished;

  constructor(event: LogMessagePublished) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sequence(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get payload(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get consistencyLevel(): i32 {
    return this._event.parameters[4].value.toI32();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CoreBridge__getGuardianSetResultValue0Struct extends ethereum.Tuple {
  get keys(): Array<Address> {
    return this[0].toAddressArray();
  }

  get expirationTime(): BigInt {
    return this[1].toBigInt();
  }
}

export class CoreBridge__parseAndVerifyVMResultVmStruct extends ethereum.Tuple {
  get version(): i32 {
    return this[0].toI32();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get nonce(): BigInt {
    return this[2].toBigInt();
  }

  get emitterChainId(): i32 {
    return this[3].toI32();
  }

  get emitterAddress(): Bytes {
    return this[4].toBytes();
  }

  get sequence(): BigInt {
    return this[5].toBigInt();
  }

  get consistencyLevel(): i32 {
    return this[6].toI32();
  }

  get payload(): Bytes {
    return this[7].toBytes();
  }

  get guardianSetIndex(): BigInt {
    return this[8].toBigInt();
  }

  get signatures(): Array<
    CoreBridge__parseAndVerifyVMResultVmSignaturesStruct
  > {
    return this[9].toTupleArray<
      CoreBridge__parseAndVerifyVMResultVmSignaturesStruct
    >();
  }

  get hash(): Bytes {
    return this[10].toBytes();
  }
}

export class CoreBridge__parseAndVerifyVMResultVmSignaturesStruct extends ethereum.Tuple {
  get r(): Bytes {
    return this[0].toBytes();
  }

  get s(): Bytes {
    return this[1].toBytes();
  }

  get v(): i32 {
    return this[2].toI32();
  }

  get guardianIndex(): i32 {
    return this[3].toI32();
  }
}

export class CoreBridge__parseAndVerifyVMResult {
  value0: CoreBridge__parseAndVerifyVMResultVmStruct;
  value1: boolean;
  value2: string;

  constructor(
    value0: CoreBridge__parseAndVerifyVMResultVmStruct,
    value1: boolean,
    value2: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTuple(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }
}

export class CoreBridge__parseContractUpgradeResultCuStruct extends ethereum.Tuple {
  get module(): Bytes {
    return this[0].toBytes();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get chain(): i32 {
    return this[2].toI32();
  }

  get newContract(): Address {
    return this[3].toAddress();
  }
}

export class CoreBridge__parseGuardianSetUpgradeResultGsuStruct extends ethereum.Tuple {
  get module(): Bytes {
    return this[0].toBytes();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get chain(): i32 {
    return this[2].toI32();
  }

  get newGuardianSet(): CoreBridge__parseGuardianSetUpgradeResultGsuNewGuardianSetStruct {
    return changetype<
      CoreBridge__parseGuardianSetUpgradeResultGsuNewGuardianSetStruct
    >(this[3].toTuple());
  }

  get newGuardianSetIndex(): BigInt {
    return this[4].toBigInt();
  }
}

export class CoreBridge__parseGuardianSetUpgradeResultGsuNewGuardianSetStruct extends ethereum.Tuple {
  get keys(): Array<Address> {
    return this[0].toAddressArray();
  }

  get expirationTime(): BigInt {
    return this[1].toBigInt();
  }
}

export class CoreBridge__parseSetMessageFeeResultSmfStruct extends ethereum.Tuple {
  get module(): Bytes {
    return this[0].toBytes();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get chain(): i32 {
    return this[2].toI32();
  }

  get messageFee(): BigInt {
    return this[3].toBigInt();
  }
}

export class CoreBridge__parseTransferFeesResultTfStruct extends ethereum.Tuple {
  get module(): Bytes {
    return this[0].toBytes();
  }

  get action(): i32 {
    return this[1].toI32();
  }

  get chain(): i32 {
    return this[2].toI32();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get recipient(): Bytes {
    return this[4].toBytes();
  }
}

export class CoreBridge__parseVMResultVmStruct extends ethereum.Tuple {
  get version(): i32 {
    return this[0].toI32();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get nonce(): BigInt {
    return this[2].toBigInt();
  }

  get emitterChainId(): i32 {
    return this[3].toI32();
  }

  get emitterAddress(): Bytes {
    return this[4].toBytes();
  }

  get sequence(): BigInt {
    return this[5].toBigInt();
  }

  get consistencyLevel(): i32 {
    return this[6].toI32();
  }

  get payload(): Bytes {
    return this[7].toBytes();
  }

  get guardianSetIndex(): BigInt {
    return this[8].toBigInt();
  }

  get signatures(): Array<CoreBridge__parseVMResultVmSignaturesStruct> {
    return this[9].toTupleArray<CoreBridge__parseVMResultVmSignaturesStruct>();
  }

  get hash(): Bytes {
    return this[10].toBytes();
  }
}

export class CoreBridge__parseVMResultVmSignaturesStruct extends ethereum.Tuple {
  get r(): Bytes {
    return this[0].toBytes();
  }

  get s(): Bytes {
    return this[1].toBytes();
  }

  get v(): i32 {
    return this[2].toI32();
  }

  get guardianIndex(): i32 {
    return this[3].toI32();
  }
}

export class CoreBridge__verifySignaturesResult {
  value0: boolean;
  value1: string;

  constructor(value0: boolean, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class CoreBridge__verifySignaturesInputSignaturesStruct extends ethereum.Tuple {
  get r(): Bytes {
    return this[0].toBytes();
  }

  get s(): Bytes {
    return this[1].toBytes();
  }

  get v(): i32 {
    return this[2].toI32();
  }

  get guardianIndex(): i32 {
    return this[3].toI32();
  }
}

export class CoreBridge__verifySignaturesInputGuardianSetStruct extends ethereum.Tuple {
  get keys(): Array<Address> {
    return this[0].toAddressArray();
  }

  get expirationTime(): BigInt {
    return this[1].toBigInt();
  }
}

export class CoreBridge__verifyVMResult {
  value0: boolean;
  value1: string;

  constructor(value0: boolean, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class CoreBridge__verifyVMInputVmStruct extends ethereum.Tuple {
  get version(): i32 {
    return this[0].toI32();
  }

  get timestamp(): BigInt {
    return this[1].toBigInt();
  }

  get nonce(): BigInt {
    return this[2].toBigInt();
  }

  get emitterChainId(): i32 {
    return this[3].toI32();
  }

  get emitterAddress(): Bytes {
    return this[4].toBytes();
  }

  get sequence(): BigInt {
    return this[5].toBigInt();
  }

  get consistencyLevel(): i32 {
    return this[6].toI32();
  }

  get payload(): Bytes {
    return this[7].toBytes();
  }

  get guardianSetIndex(): BigInt {
    return this[8].toBigInt();
  }

  get signatures(): Array<CoreBridge__verifyVMInputVmSignaturesStruct> {
    return this[9].toTupleArray<CoreBridge__verifyVMInputVmSignaturesStruct>();
  }

  get hash(): Bytes {
    return this[10].toBytes();
  }
}

export class CoreBridge__verifyVMInputVmSignaturesStruct extends ethereum.Tuple {
  get r(): Bytes {
    return this[0].toBytes();
  }

  get s(): Bytes {
    return this[1].toBytes();
  }

  get v(): i32 {
    return this[2].toI32();
  }

  get guardianIndex(): i32 {
    return this[3].toI32();
  }
}

export class CoreBridge extends ethereum.SmartContract {
  static bind(address: Address): CoreBridge {
    return new CoreBridge("CoreBridge", address);
  }

  chainId(): i32 {
    let result = super.call("chainId", "chainId():(uint16)", []);

    return result[0].toI32();
  }

  try_chainId(): ethereum.CallResult<i32> {
    let result = super.tryCall("chainId", "chainId():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getCurrentGuardianSetIndex(): BigInt {
    let result = super.call(
      "getCurrentGuardianSetIndex",
      "getCurrentGuardianSetIndex():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentGuardianSetIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentGuardianSetIndex",
      "getCurrentGuardianSetIndex():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGuardianSet(index: BigInt): CoreBridge__getGuardianSetResultValue0Struct {
    let result = super.call(
      "getGuardianSet",
      "getGuardianSet(uint32):((address[],uint32))",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return changetype<CoreBridge__getGuardianSetResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getGuardianSet(
    index: BigInt
  ): ethereum.CallResult<CoreBridge__getGuardianSetResultValue0Struct> {
    let result = super.tryCall(
      "getGuardianSet",
      "getGuardianSet(uint32):((address[],uint32))",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CoreBridge__getGuardianSetResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getGuardianSetExpiry(): BigInt {
    let result = super.call(
      "getGuardianSetExpiry",
      "getGuardianSetExpiry():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_getGuardianSetExpiry(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGuardianSetExpiry",
      "getGuardianSetExpiry():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  governanceActionIsConsumed(hash: Bytes): boolean {
    let result = super.call(
      "governanceActionIsConsumed",
      "governanceActionIsConsumed(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(hash)]
    );

    return result[0].toBoolean();
  }

  try_governanceActionIsConsumed(hash: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "governanceActionIsConsumed",
      "governanceActionIsConsumed(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(hash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  governanceChainId(): i32 {
    let result = super.call(
      "governanceChainId",
      "governanceChainId():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_governanceChainId(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "governanceChainId",
      "governanceChainId():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  governanceContract(): Bytes {
    let result = super.call(
      "governanceContract",
      "governanceContract():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_governanceContract(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "governanceContract",
      "governanceContract():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isInitialized(impl: Address): boolean {
    let result = super.call("isInitialized", "isInitialized(address):(bool)", [
      ethereum.Value.fromAddress(impl)
    ]);

    return result[0].toBoolean();
  }

  try_isInitialized(impl: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isInitialized",
      "isInitialized(address):(bool)",
      [ethereum.Value.fromAddress(impl)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  messageFee(): BigInt {
    let result = super.call("messageFee", "messageFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_messageFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("messageFee", "messageFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextSequence(emitter: Address): BigInt {
    let result = super.call("nextSequence", "nextSequence(address):(uint64)", [
      ethereum.Value.fromAddress(emitter)
    ]);

    return result[0].toBigInt();
  }

  try_nextSequence(emitter: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextSequence",
      "nextSequence(address):(uint64)",
      [ethereum.Value.fromAddress(emitter)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  parseAndVerifyVM(encodedVM: Bytes): CoreBridge__parseAndVerifyVMResult {
    let result = super.call(
      "parseAndVerifyVM",
      "parseAndVerifyVM(bytes):((uint8,uint32,uint32,uint16,bytes32,uint64,uint8,bytes,uint32,(bytes32,bytes32,uint8,uint8)[],bytes32),bool,string)",
      [ethereum.Value.fromBytes(encodedVM)]
    );

    return changetype<CoreBridge__parseAndVerifyVMResult>(
      new CoreBridge__parseAndVerifyVMResult(
        changetype<CoreBridge__parseAndVerifyVMResultVmStruct>(
          result[0].toTuple()
        ),
        result[1].toBoolean(),
        result[2].toString()
      )
    );
  }

  try_parseAndVerifyVM(
    encodedVM: Bytes
  ): ethereum.CallResult<CoreBridge__parseAndVerifyVMResult> {
    let result = super.tryCall(
      "parseAndVerifyVM",
      "parseAndVerifyVM(bytes):((uint8,uint32,uint32,uint16,bytes32,uint64,uint8,bytes,uint32,(bytes32,bytes32,uint8,uint8)[],bytes32),bool,string)",
      [ethereum.Value.fromBytes(encodedVM)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CoreBridge__parseAndVerifyVMResult>(
        new CoreBridge__parseAndVerifyVMResult(
          changetype<CoreBridge__parseAndVerifyVMResultVmStruct>(
            value[0].toTuple()
          ),
          value[1].toBoolean(),
          value[2].toString()
        )
      )
    );
  }

  parseContractUpgrade(
    encodedUpgrade: Bytes
  ): CoreBridge__parseContractUpgradeResultCuStruct {
    let result = super.call(
      "parseContractUpgrade",
      "parseContractUpgrade(bytes):((bytes32,uint8,uint16,address))",
      [ethereum.Value.fromBytes(encodedUpgrade)]
    );

    return changetype<CoreBridge__parseContractUpgradeResultCuStruct>(
      result[0].toTuple()
    );
  }

  try_parseContractUpgrade(
    encodedUpgrade: Bytes
  ): ethereum.CallResult<CoreBridge__parseContractUpgradeResultCuStruct> {
    let result = super.tryCall(
      "parseContractUpgrade",
      "parseContractUpgrade(bytes):((bytes32,uint8,uint16,address))",
      [ethereum.Value.fromBytes(encodedUpgrade)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CoreBridge__parseContractUpgradeResultCuStruct>(
        value[0].toTuple()
      )
    );
  }

  parseGuardianSetUpgrade(
    encodedUpgrade: Bytes
  ): CoreBridge__parseGuardianSetUpgradeResultGsuStruct {
    let result = super.call(
      "parseGuardianSetUpgrade",
      "parseGuardianSetUpgrade(bytes):((bytes32,uint8,uint16,(address[],uint32),uint32))",
      [ethereum.Value.fromBytes(encodedUpgrade)]
    );

    return changetype<CoreBridge__parseGuardianSetUpgradeResultGsuStruct>(
      result[0].toTuple()
    );
  }

  try_parseGuardianSetUpgrade(
    encodedUpgrade: Bytes
  ): ethereum.CallResult<CoreBridge__parseGuardianSetUpgradeResultGsuStruct> {
    let result = super.tryCall(
      "parseGuardianSetUpgrade",
      "parseGuardianSetUpgrade(bytes):((bytes32,uint8,uint16,(address[],uint32),uint32))",
      [ethereum.Value.fromBytes(encodedUpgrade)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CoreBridge__parseGuardianSetUpgradeResultGsuStruct>(
        value[0].toTuple()
      )
    );
  }

  parseSetMessageFee(
    encodedSetMessageFee: Bytes
  ): CoreBridge__parseSetMessageFeeResultSmfStruct {
    let result = super.call(
      "parseSetMessageFee",
      "parseSetMessageFee(bytes):((bytes32,uint8,uint16,uint256))",
      [ethereum.Value.fromBytes(encodedSetMessageFee)]
    );

    return changetype<CoreBridge__parseSetMessageFeeResultSmfStruct>(
      result[0].toTuple()
    );
  }

  try_parseSetMessageFee(
    encodedSetMessageFee: Bytes
  ): ethereum.CallResult<CoreBridge__parseSetMessageFeeResultSmfStruct> {
    let result = super.tryCall(
      "parseSetMessageFee",
      "parseSetMessageFee(bytes):((bytes32,uint8,uint16,uint256))",
      [ethereum.Value.fromBytes(encodedSetMessageFee)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CoreBridge__parseSetMessageFeeResultSmfStruct>(
        value[0].toTuple()
      )
    );
  }

  parseTransferFees(
    encodedTransferFees: Bytes
  ): CoreBridge__parseTransferFeesResultTfStruct {
    let result = super.call(
      "parseTransferFees",
      "parseTransferFees(bytes):((bytes32,uint8,uint16,uint256,bytes32))",
      [ethereum.Value.fromBytes(encodedTransferFees)]
    );

    return changetype<CoreBridge__parseTransferFeesResultTfStruct>(
      result[0].toTuple()
    );
  }

  try_parseTransferFees(
    encodedTransferFees: Bytes
  ): ethereum.CallResult<CoreBridge__parseTransferFeesResultTfStruct> {
    let result = super.tryCall(
      "parseTransferFees",
      "parseTransferFees(bytes):((bytes32,uint8,uint16,uint256,bytes32))",
      [ethereum.Value.fromBytes(encodedTransferFees)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CoreBridge__parseTransferFeesResultTfStruct>(
        value[0].toTuple()
      )
    );
  }

  parseVM(encodedVM: Bytes): CoreBridge__parseVMResultVmStruct {
    let result = super.call(
      "parseVM",
      "parseVM(bytes):((uint8,uint32,uint32,uint16,bytes32,uint64,uint8,bytes,uint32,(bytes32,bytes32,uint8,uint8)[],bytes32))",
      [ethereum.Value.fromBytes(encodedVM)]
    );

    return changetype<CoreBridge__parseVMResultVmStruct>(result[0].toTuple());
  }

  try_parseVM(
    encodedVM: Bytes
  ): ethereum.CallResult<CoreBridge__parseVMResultVmStruct> {
    let result = super.tryCall(
      "parseVM",
      "parseVM(bytes):((uint8,uint32,uint32,uint16,bytes32,uint64,uint8,bytes,uint32,(bytes32,bytes32,uint8,uint8)[],bytes32))",
      [ethereum.Value.fromBytes(encodedVM)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CoreBridge__parseVMResultVmStruct>(value[0].toTuple())
    );
  }

  verifySignatures(
    hash: Bytes,
    signatures: Array<CoreBridge__verifySignaturesInputSignaturesStruct>,
    guardianSet: CoreBridge__verifySignaturesInputGuardianSetStruct
  ): CoreBridge__verifySignaturesResult {
    let result = super.call(
      "verifySignatures",
      "verifySignatures(bytes32,(bytes32,bytes32,uint8,uint8)[],(address[],uint32)):(bool,string)",
      [
        ethereum.Value.fromFixedBytes(hash),
        ethereum.Value.fromTupleArray(signatures),
        ethereum.Value.fromTuple(guardianSet)
      ]
    );

    return new CoreBridge__verifySignaturesResult(
      result[0].toBoolean(),
      result[1].toString()
    );
  }

  try_verifySignatures(
    hash: Bytes,
    signatures: Array<CoreBridge__verifySignaturesInputSignaturesStruct>,
    guardianSet: CoreBridge__verifySignaturesInputGuardianSetStruct
  ): ethereum.CallResult<CoreBridge__verifySignaturesResult> {
    let result = super.tryCall(
      "verifySignatures",
      "verifySignatures(bytes32,(bytes32,bytes32,uint8,uint8)[],(address[],uint32)):(bool,string)",
      [
        ethereum.Value.fromFixedBytes(hash),
        ethereum.Value.fromTupleArray(signatures),
        ethereum.Value.fromTuple(guardianSet)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CoreBridge__verifySignaturesResult(
        value[0].toBoolean(),
        value[1].toString()
      )
    );
  }

  verifyVM(vm: CoreBridge__verifyVMInputVmStruct): CoreBridge__verifyVMResult {
    let result = super.call(
      "verifyVM",
      "verifyVM((uint8,uint32,uint32,uint16,bytes32,uint64,uint8,bytes,uint32,(bytes32,bytes32,uint8,uint8)[],bytes32)):(bool,string)",
      [ethereum.Value.fromTuple(vm)]
    );

    return new CoreBridge__verifyVMResult(
      result[0].toBoolean(),
      result[1].toString()
    );
  }

  try_verifyVM(
    vm: CoreBridge__verifyVMInputVmStruct
  ): ethereum.CallResult<CoreBridge__verifyVMResult> {
    let result = super.tryCall(
      "verifyVM",
      "verifyVM((uint8,uint32,uint32,uint16,bytes32,uint64,uint8,bytes,uint32,(bytes32,bytes32,uint8,uint8)[],bytes32)):(bool,string)",
      [ethereum.Value.fromTuple(vm)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CoreBridge__verifyVMResult(value[0].toBoolean(), value[1].toString())
    );
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class SubmitContractUpgradeCall extends ethereum.Call {
  get inputs(): SubmitContractUpgradeCall__Inputs {
    return new SubmitContractUpgradeCall__Inputs(this);
  }

  get outputs(): SubmitContractUpgradeCall__Outputs {
    return new SubmitContractUpgradeCall__Outputs(this);
  }
}

export class SubmitContractUpgradeCall__Inputs {
  _call: SubmitContractUpgradeCall;

  constructor(call: SubmitContractUpgradeCall) {
    this._call = call;
  }

  get _vm(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SubmitContractUpgradeCall__Outputs {
  _call: SubmitContractUpgradeCall;

  constructor(call: SubmitContractUpgradeCall) {
    this._call = call;
  }
}

export class SubmitNewGuardianSetCall extends ethereum.Call {
  get inputs(): SubmitNewGuardianSetCall__Inputs {
    return new SubmitNewGuardianSetCall__Inputs(this);
  }

  get outputs(): SubmitNewGuardianSetCall__Outputs {
    return new SubmitNewGuardianSetCall__Outputs(this);
  }
}

export class SubmitNewGuardianSetCall__Inputs {
  _call: SubmitNewGuardianSetCall;

  constructor(call: SubmitNewGuardianSetCall) {
    this._call = call;
  }

  get _vm(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SubmitNewGuardianSetCall__Outputs {
  _call: SubmitNewGuardianSetCall;

  constructor(call: SubmitNewGuardianSetCall) {
    this._call = call;
  }
}

export class SubmitSetMessageFeeCall extends ethereum.Call {
  get inputs(): SubmitSetMessageFeeCall__Inputs {
    return new SubmitSetMessageFeeCall__Inputs(this);
  }

  get outputs(): SubmitSetMessageFeeCall__Outputs {
    return new SubmitSetMessageFeeCall__Outputs(this);
  }
}

export class SubmitSetMessageFeeCall__Inputs {
  _call: SubmitSetMessageFeeCall;

  constructor(call: SubmitSetMessageFeeCall) {
    this._call = call;
  }

  get _vm(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SubmitSetMessageFeeCall__Outputs {
  _call: SubmitSetMessageFeeCall;

  constructor(call: SubmitSetMessageFeeCall) {
    this._call = call;
  }
}

export class SubmitTransferFeesCall extends ethereum.Call {
  get inputs(): SubmitTransferFeesCall__Inputs {
    return new SubmitTransferFeesCall__Inputs(this);
  }

  get outputs(): SubmitTransferFeesCall__Outputs {
    return new SubmitTransferFeesCall__Outputs(this);
  }
}

export class SubmitTransferFeesCall__Inputs {
  _call: SubmitTransferFeesCall;

  constructor(call: SubmitTransferFeesCall) {
    this._call = call;
  }

  get _vm(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SubmitTransferFeesCall__Outputs {
  _call: SubmitTransferFeesCall;

  constructor(call: SubmitTransferFeesCall) {
    this._call = call;
  }
}

export class PublishMessageCall extends ethereum.Call {
  get inputs(): PublishMessageCall__Inputs {
    return new PublishMessageCall__Inputs(this);
  }

  get outputs(): PublishMessageCall__Outputs {
    return new PublishMessageCall__Outputs(this);
  }
}

export class PublishMessageCall__Inputs {
  _call: PublishMessageCall;

  constructor(call: PublishMessageCall) {
    this._call = call;
  }

  get nonce(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get payload(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get consistencyLevel(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class PublishMessageCall__Outputs {
  _call: PublishMessageCall;

  constructor(call: PublishMessageCall) {
    this._call = call;
  }

  get sequence(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
