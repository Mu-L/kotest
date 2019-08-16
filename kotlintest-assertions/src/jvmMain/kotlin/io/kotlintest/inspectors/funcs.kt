package io.kotlintest.inspectors

import convertValueToString
import exceptionToMessage
import io.kotlintest.Failures

fun <T> runTests(col: Collection<T>, f: (T) -> Unit): List<ElementResult<T>> {
  return col.map {
    try {
      f(it)
      ElementPass(it)
    } catch (e: Throwable) {
      ElementFail(it, e)
    }
  }
}

fun <T> buildAssertionError(msg: String, results: List<ElementResult<T>>): String {

  val passed = results.filterIsInstance<ElementPass<T>>()
  val failed = results.filterIsInstance<ElementFail<T>>()

  val builder = StringBuilder(msg)
  builder.append("\n\nThe following elements passed:\n")
  if (passed.isEmpty()) {
    builder.append("--none--")
  } else {
    builder.append(passed.map { it.t }.joinToString("\n"))
  }
  builder.append("\n\nThe following elements failed:\n")
  if (failed.isEmpty()) {
    builder.append("--none--")
  } else {
    builder.append(failed.joinToString("\n") { convertValueToString(it.t) + " => " + exceptionToMessage(it.error) })
  }
  throw Failures.failure(builder.toString())
}
