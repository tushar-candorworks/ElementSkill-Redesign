import { Component } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center p-6 bg-[#f6f9fa]">
          <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-[#d5e2e7] shadow-lg text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle size={24} />
            </div>
            <h2 className="text-xl font-bold text-[#061a22]">
              Something went wrong
            </h2>
            <p className="text-sm text-[#455c65]">
              An unexpected error occurred while rendering this section.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#005a75] text-white text-sm font-semibold hover:bg-[#004358] transition-colors cursor-pointer"
            >
              <RotateCcw size={16} />
              <span>Reload page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
