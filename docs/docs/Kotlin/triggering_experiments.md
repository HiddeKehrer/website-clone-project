---
title: How to trigger experiments in Kotlin?
tags: [kotlin, experiments]
---

## Triggering Experiments

In your Android `Activity`, you can trigger an experiment when the activity is created:

```kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.pipeguru.android.PipeGuru

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Trigger an experiment when the activity is created
        PipeGuru.track("user_viewed_main_screen")
    }
}
```

You can also trigger an experiment based on a user action, like a button click:

```kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.pipeguru.android.PipeGuru

class PricingActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pricing)
    }

    fun onSubscribeButtonClick(view: View) {
        // Trigger an experiment when the user taps the subscribe button
        PipeGuru.track("user_tapped_subscribe", mapOf("plan" to "premium"))
    }
}
```

To show an experiment directly, you can use the `showExperiment` method:

```kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.pipeguru.android.PipeGuru

class MainActivity : AppCompatActivity() {
    override fun onResume() {
        super.onResume()

        // Directly show an experiment
        PipeGuru.showExperiment("new_user_onboarding", this)
    }
}
```