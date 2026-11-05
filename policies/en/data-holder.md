---
title: Data Holder Privacy Policy
updatedAt: 2026-11-05
---

# Data Holder Privacy Policy

Effective date: November 2, 2026

Kaito Kitaya (the "Developer") sets out below how the smartphone app "Data Holder" (the "App") handles information.

## 1. Basic policy

The App handles the data you save **only on your device**. The Developer does not collect, store or transmit your personal information or anything you keep in the App.

## 2. Information stored on your device

To provide its features, the App stores the following on your device:

- Vault names, field names and values
- Data read from a passport that you choose to save (name, nationality, date of birth, passport number, face photo, etc.)
- Display settings (theme color, etc.)
- App lock settings (on or off, whether biometrics are used, the number of failed password attempts, and a hash of the password)
- Whether Pro has been purchased

Field names and values (including face photos) are encrypted with a key generated on the device, and that key is protected by the device's secure storage (Android Keystore / iOS Keychain). Vault names are stored on the device without encryption. The app lock password itself is not stored; only a hash that is hard to reverse (PBKDF2) is kept in the device's secure storage.

This information is not sent to the Developer's servers or to third parties. The Developer cannot see it.

## 3. Information not collected

The App does not collect:

- Contact details such as email addresses or phone numbers (there is no account registration)
- Location, contacts, camera or microphone data
- Usage analytics, crash information or advertising identifiers (the App uses no analytics tools or ads)

## 4. Network access

Except for cloud backup in section 8, the App does not connect to the internet. The Android version does not have the permission to connect to the internet.

## 5. Reading passports (NFC)

This feature is offered in the Android version. It is not currently offered in the iOS version.

To read the chip of a passport, the App uses the passport number, date of birth and date of expiry you enter. They are used only to open the chip and are not saved. Data read from the chip is stored on the device as described in section 2 only if you choose to save it. The chip is checked for authenticity on the device with certificates bundled in the App.

## 6. App lock

App lock is optional and free. You unlock the App with a password you set or with biometrics.

- Biometric authentication (Face ID, Touch ID, fingerprint, etc.) is performed by the device's operating system. The App receives only whether authentication succeeded; it never receives or stores biometric data.
- The password and its hash are never sent to the Developer or to third parties.
- If you forget the password, the Developer cannot recover it. Reinstalling the App removes the lock, but erases your vaults.
- App lock protects what is shown on screen. Field names and values are encrypted as described in section 2 whether or not the lock is on.

## 7. Exporting and sharing backups

Backup export creates a file only when you ask for one and hands it to the device's share feature. The file is encrypted with a password you choose. You choose where it goes, and its handling after that follows the terms of the service you share it with. The Developer never receives these files.

## 8. Cloud backup (optional, Pro)

This section applies from the version that provides cloud backup. The feature works only when you turn it on.

- Backups are encrypted on your device (AES-256) with a backup password you choose, then stored in the App's own folder (appDataFolder) of your Google Drive.
- Your backup password and the encryption key are never sent to the Developer or to Google. Neither the Developer nor Google can read the contents of your backups.
- The Developer runs no server and never receives, stores or views your backups.
- The only Google permission the App uses is creating, reading and deleting files in its own app folder (`drive.appdata`). It does not access any other files in your Google Drive.
- The App's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.
- When you turn the feature off, you can delete the cloud backups from the App. You can also revoke the App's access in your Google Account settings.
- If you forget your backup password, the backup cannot be restored.

## 9. Clipboard

Copying a value puts it on your device's clipboard, where other apps on the device may be able to read it. The App does not clear the clipboard automatically. When you no longer need the value, overwrite it, for example by copying something else.

## 10. In-app purchase

Pro purchases and restores are processed through the payment system of Apple Inc. (App Store). Pro is not currently sold in the Android version. Apple handles payment and account information under its own privacy policy, and the Developer never receives it. The App receives only whether the purchase was completed.

- Apple Privacy Policy: https://www.apple.com/legal/privacy/

## 11. Deleting data

Vault data is erased by deleting it in the App or by deleting the App from your device. On iOS, the encryption key and the hash of the app lock password may remain in the Keychain after the App is deleted. The Developer holds no data, so there is nothing for the Developer to delete or disclose.

## 12. Children

The App is not directed at children under 13.

## 13. Users outside Japan (GDPR, CCPA, etc.)

The Developer does not process your personal data, so there is no information subject to requests for access, correction, deletion or opting out of sale under the EU General Data Protection Regulation (GDPR) or US state laws (CCPA, etc.). The Developer does not sell personal data.

## 14. Changes

If this policy changes, the change will be announced on this page. If the information the App handles changes, this will be announced in the App or on this page beforehand.

## 15. Contact

- Developer: Kaito Kitaya
- Email: kworkshere@gmail.com

If there is any discrepancy between the Japanese and English versions of this policy, the Japanese version prevails.
