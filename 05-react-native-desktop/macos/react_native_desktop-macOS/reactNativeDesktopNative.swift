import Foundation
import KeychainAccess

private let keychain = Keychain(service: "ReactNativeDesktop")

@objc(ReactNativeDesktopNative)
class ReactNativeDesktopNative: NSObject {
  @objc
  static func requireMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func keychainWrite(_ key: NSString, payload: NSString, resolver: RCTPromiseResolveBlock, rejecter: RCTPromiseRejectBlock) {
    keychain[key as String] = payload as String
    resolver(true)
  }
  
  @objc
  func keychainRead(_ key: NSString, resolver resolve: RCTPromiseResolveBlock, rejecter: RCTPromiseRejectBlock) {
    let value = keychain[key as String]
    return resolve(value)
  }
}
