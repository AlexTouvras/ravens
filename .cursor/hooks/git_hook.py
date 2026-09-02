"""Thin wrapper — git runs this on post-commit."""
import sys
from pathlib import Path

_root = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(_root / "src"))

from projectbrain.hooks.git_hook import main  # noqa: E402

main()
