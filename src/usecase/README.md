## usecase

### 概要
ユーザーの各アクションに対応する一連の処理を実行する層。

### 依存関係
プレゼンテーション層に依存し、プレゼンテーション層（View）が必要とするオブジェクトの加工処理はユースケース層で行う。
また、リポジトリ層を呼び出すこともある。

### 設計思想
外部データの構造や加工処理の詳細は知らずとも、Component はインターフェースに合わせて引数を渡すだけで描画に必要なオブジェクトを取得できる。