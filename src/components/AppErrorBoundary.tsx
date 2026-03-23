import { Component, ReactNode } from "react";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  errorMessage: string | null;
}

class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    errorMessage: null
  };

  static getDerivedStateFromError(error: Error) {
    return {
      errorMessage: error.message
    };
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ivory px-6 text-ink">
          <div className="max-w-xl rounded-[28px] border border-line-strong bg-surface p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rosewood/70">
              Runtime Error
            </p>
            <h1 className="mt-3 font-display text-4xl text-ink">
              페이지를 불러오는 중 오류가 발생했습니다.
            </h1>
            <p className="mt-4 text-sm leading-7 text-rosewood/85">
              새로고침 후 다시 확인해 주세요. 계속 반복되면 아래 메시지를 그대로
              전달해 주세요.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-2xl bg-surface-soft p-4 text-xs leading-6 text-ink/80">
              {this.state.errorMessage}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;

