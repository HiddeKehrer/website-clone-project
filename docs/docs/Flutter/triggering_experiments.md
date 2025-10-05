---
title: How to trigger experiments in Flutter?
tags: [flutter, experiments]
---

## Triggering Experiments

In your Flutter widget, you can trigger an experiment when the widget is initialized:

```dart
import 'package:flutter/material.dart';
import 'package:pipeguru_flutter/pipeguru_flutter.dart';

class MainScreen extends StatefulWidget {
  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  void initState() {
    super.initState();
    // Trigger an experiment when the screen loads
    PipeGuru.track('user_viewed_main_screen');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // ...
    );
  }
}
```

You can also trigger an experiment based on a user action, like a button press:

```dart
import 'package:flutter/material.dart';
import 'package:pipeguru_flutter/pipeguru_flutter.dart';

class PricingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Trigger an experiment when the user presses the subscribe button
            PipeGuru.track('user_tapped_subscribe', properties: {'plan': 'premium'});
          },
          child: Text('Subscribe'),
        ),
      ),
    );
  }
}
```

To show an experiment directly, you can use the `showExperiment` method:

```dart
import 'package:flutter/material.dart';
import 'package:pipeguru_flutter/pipeguru_flutter.dart';

class MainScreen extends StatefulWidget {
  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  void initState() {
    super.initState();
    // Directly show an experiment
    PipeGuru.showExperiment('new_user_onboarding');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // ...
    );
  }
}
```