class FrequencyTracker {
  constructor() {
    this.hashMap = new Map();
    this.frequencyMap = new Map();
  }

  add(number) {
    let frequency = this.hashMap.get(number) || 0;
    this.hashMap.set(number, frequency + 1);

    let values = this.frequencyMap.get(frequency) || new Set();
    values.delete(number);
    this.frequencyMap.set(frequency, values);

    let newFrequency = frequency + 1;
    let newValues = this.frequencyMap.get(newFrequency) || new Set();
    newValues.add(number);
    this.frequencyMap.set(newFrequency, newValues);
  }

  deleteOne(number) {
    let frequency = this.hashMap.get(number) || 0;
    if (frequency == 0) {
      return;
    }
    this.hashMap.set(number, frequency - 1);

    let values = this.frequencyMap.get(frequency) || new Set();
    values.delete(number);
    this.frequencyMap.set(frequency, values);

    let newFrequency = frequency - 1;
    let newValues = this.frequencyMap.get(newFrequency) || new Set();
    newValues.add(number);
    this.frequencyMap.set(newFrequency, newValues);
  }

  hasFrequency(frequency) {
    return (
      this.frequencyMap.has(frequency) &&
      this.frequencyMap.get(frequency).size > 0
    );
  }
}
