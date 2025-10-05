---
title: How to trigger experiments in Swift?
tags: [swift, experiments]
---

## Triggering Experiments

In your `UIViewController`, you can trigger an experiment when the view appears:

```swift
import UIKit
import PipeGuru

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Trigger an experiment when the view loads
        PipeGuru.track("user_viewed_main_screen")
    }
}
```

You can also trigger an experiment based on a user action, like a button click:

```swift
import UIKit
import PipeGuru

class PricingViewController: UIViewController {

    @IBAction func didTapSubscribeButton(_ sender: Any) {
        // Trigger an experiment when the user taps the subscribe button
        PipeGuru.track("user_tapped_subscribe", properties: ["plan": "premium"])
    }
}
```

To show an experiment directly, you can use the `showExperiment` method:

```swift
import UIKit
import PipeGuru

class ViewController: UIViewController {

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        // Directly show an experiment
        PipeGuru.showExperiment(withKey: "new_user_onboarding", for: self)
    }
}
```