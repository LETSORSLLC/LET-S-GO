# Let's Go

Let's Go was founded by Don B., who spent several years driving for Uber and Lyft. His experiences revealed major gaps in the rideshare industry, particularly in safety, ride consistency, and driver satisfaction.

## Features

- **Dual-Stage Identity Verification**
  Enhances safety by requiring multiple layers of verification for both drivers and riders before each trip begins. This method ensures a higher level of trust and security compared to existing platforms.

- **Optional Live Trip Recordings**
  Provides riders and drivers with an extra layer of protection during each journey. Users can enable this feature through the app settings.

- **Real-Time Trip Monitoring**
  Maintains consistent ride quality by monitoring trips in real time and conducting thorough vehicle inspections. This ensures all cars meet high standards of cleanliness, safety, and comfort.

- **Passenger Can Choose Nearby Driver**
  A passenger can choose a nearby driver on the app, but the driver cannot see the passenger.

- **Pick-Up Threshold and Additional Fees**
  Drivers have a threshold of 5 miles for pick up. If the passenger is farther away, the driver will receive an additional fee for the extra miles.

- **Pickup and Dropoff Visibility**
  Drivers are able to see the pickup point and dropoff point while accepting the trip.

- **Miles Data Tracking**
  Drivers get the miles data from where they start accepting the trip until the end where they drop the passenger.

- **Non-Discriminatory Ride Assignment**
  There is no discrimination in providing rides. All drivers should get rides evenly.

- **New York and New Jersey Driver Trips**
  New York drivers in New Jersey should get the New York trip from New Jersey, and if New York drivers are not available, the trip can go to New Jersey drivers followed by compensation for tolls.

- **No Surge Pricing**
  There will be no surge pricing at any time.

## Installation Instructions

### iOS
1. Clone the repository.
2. Open the project in Xcode.
3. Install dependencies using `CocoaPods`.
4. Configure any necessary environment variables.
5. Build and run the project on a simulator or device.

### Android
1. Clone the repository.
2. Open the project in Android Studio.
3. Install dependencies using `Gradle`.
4. Configure any necessary environment variables.
5. Build and run the project on an emulator or device.

## Screenshots

### iOS
- ![Screenshot1](assets/ios_screenshot1.png)
- ![Screenshot2](assets/ios_screenshot2.png)

### Android
- ![Screenshot1](assets/android_screenshot1.png)
- ![Screenshot2](assets/android_screenshot2.png)

## Environment Variables Setup

To securely store and use credentials, set the following environment variables in your GitHub repository settings:

- `APP_STORE_CONNECT_API_KEY`: Your App Store Connect API key (iOS).
- `ANDROID_KEYSTORE_PASSWORD`: Your Android keystore password (Android).

You can set these secrets in your repository by navigating to **Settings > Secrets and variables > Actions** and adding new repository secrets.
