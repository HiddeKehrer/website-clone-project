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

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        // Trigger an experiment when the view appears
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
        // This event can now be used to trigger an experiment from the PipeGuru dashboard
        let brazeSegments = ["segment1", "segment2"] // Example Braze segments

        PipeGuru.track("user_viewed_pricing_page", properties: [
            "plan": "premium",
            "userLevel": "power_user",
            "gender": "female",
            "city": "berlin",
            "country": "germany",
            "brazeSegments": brazeSegments
        ])
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
        
        let brazeSegments = ["segment1", "segment2"] // Example Braze segments

        // Directly show an experiment with properties
        PipeGuru.showExperiment(withKey: "new_user_onboarding", for: self, properties: [
            "plan": "premium",
            "userLevel": "power_user",
            "gender": "female",
            "city": "Berlin",
            "country": "Germany",
            "braze_segments": brazeSegments
        ])
    }
}
```