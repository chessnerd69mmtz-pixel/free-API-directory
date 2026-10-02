#!/usr/bin/env python3
"""Compatibility wrapper: regenerate all runtime catalog artifacts from the single canonical build pipeline."""
from pathlib import Path
import runpy
ROOT = Path(__file__).resolve().parents[1]
runpy.run_path(str(ROOT / "scripts" / "build_catalog.py"), run_name="__main__")
